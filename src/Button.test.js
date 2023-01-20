import { render, screen } from '@testing-library/react';
import Button from "./Button";

test("Button renders text", () => {
  render(<Button children="Hello" />)
  const button = screen.getByText("Hello");
  expect(button).toBeInTheDocument()
});

test("Button is green", () => {
  render(<Button />)

  const button = screen.getByRole("button");
  expect(button).toHaveAttribute("style", expect.stringContaining("background-color: green;"))
})

test("Button is red", () => {
  render(<Button backgroundColor="red"/>)

  const button = screen.getByRole("button");
  expect(button).toHaveAttribute("style", expect.stringContaining("background-color: red;"))
})
// <Button>Hello</Button>