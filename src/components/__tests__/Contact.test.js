import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us page test Case", () => {
  test("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    //ASSERTION
    expect(heading).toBeInTheDocument();
  });
  test("should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    //ASSERTION
    expect(button).toBeInTheDocument();
  });
  test("should load button inside contact us component", () => {
    render(<Contact />);

    const button = screen.getByText("Submit");

    //ASSERTION
    expect(button).toBeInTheDocument();
  });
});
