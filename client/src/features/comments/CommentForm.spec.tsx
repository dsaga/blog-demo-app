import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { postsMock } from "shared-entities-module";
import { CommentForm } from "./CommentForm";

describe("<CommentForm>", () => {
  it("should call handle save method with inputed comment information", async () => {
    const post = postsMock[0];
    const handleSaveMock = jest.fn();
    render(<CommentForm post={post} handleSave={handleSaveMock} />);
    userEvent.type(screen.getByLabelText("Author"), "author name");
    userEvent.type(screen.getByLabelText("Comment"), "author name");
    userEvent.click(screen.getByText("Submit"));
    await waitFor(() => {
      expect(handleSaveMock).toHaveBeenCalledTimes(1);
    });
  });
});
