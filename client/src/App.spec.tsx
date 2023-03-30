import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

jest.mock("./AppRoutes");
jest.mock("./assets/demo-logo.png", () => () => "logo");

describe("<App>", () => {
  it("app renders and should contain the Blog App title", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const heading = screen.getByText(/Blog App/i);
    expect(heading).toBeInTheDocument();
  });
});
