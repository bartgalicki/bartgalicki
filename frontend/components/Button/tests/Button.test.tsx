import React from "react";
// component
import Button from "../Button";
// jest/rtl
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Button", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("should return plain button if no href was provided", () => {
    render(<Button text="test" />);
    expect(screen.getByText("Test")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  test("should return button link if href was provided", () => {
    render(<Button text="link" link="http://example.com" />);
    expect(screen.getByText("Link")).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "http://example.com");
  });

  test("should return plain NavElem if no link was provided", () => {
    render(<Button text="nav element" isNavElem />);

    expect(screen.getByText("Nav element")).toBeInTheDocument();

    const button = screen.getByRole("button");

    expect(button).toHaveClass("button_nav");

    expect(screen.queryByRole("link")).not.toBeInTheDocument();
  });

  test("should return NavElem with a link if link was provided", () => {
    render(
      <Button
        text="nav element link"
        isNavElem
        link="http://example-nav-link.com"
      />
    );

    expect(screen.getByText("Nav element link")).toBeInTheDocument();

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "http://example-nav-link.com");
  });
});
