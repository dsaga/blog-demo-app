import { render, screen } from "@testing-library/react";
import { commentsMock } from "shared-entities-module";
import { Comments } from "./Comments";


describe("<Comments>", () => {
  it("should render list of comments", () => {
    render(
        <Comments comments={commentsMock} />
    );
    const comments = screen.queryAllByTestId('comment-details');
    expect(screen.getByText('Comments')).toBeInTheDocument();
    expect(comments).toHaveLength(7);
  });
});
