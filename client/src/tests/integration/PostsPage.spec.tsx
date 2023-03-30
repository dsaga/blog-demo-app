import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { getPostsMock } from "shared-entities-module";
import App from "../../App";
import { useGetPosts } from "../../features/posts/useGetPosts";

jest.mock("../../assets/demo-logo.png", () => () => "logo");

jest.mock("../../features/posts/useGetPosts", () => ({
  useGetPosts: jest.fn(),
}));

describe("<PostsPage>", () => {
  it("Should render home page with list of blog posts", async () => {
    (useGetPosts as jest.Mock).mockReturnValue({ data: getPostsMock });

    render(
      <MemoryRouter initialEntries={["Posts Page", "/"]}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByTestId("posts-page")).toBeInTheDocument();

    const heading = screen.getByText(/Posts/i);
    expect(heading).toBeInTheDocument();

    await waitFor(() => expect(screen.getAllByTestId("post")).toHaveLength(3));
  });
});
