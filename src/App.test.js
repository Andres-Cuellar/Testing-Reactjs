import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const counter = screen.getByText("0");
  expect(counter).toBeInTheDocument();
});
