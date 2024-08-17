import { render, screen } from "@testing-library/react";
import App from "../components/App";

test("renders heading Simon Walker", () => {
  render(<App />);
  const linkElement = screen.getByText(/Simon Walker/i);
  expect(linkElement).toBeInTheDocument();
});
