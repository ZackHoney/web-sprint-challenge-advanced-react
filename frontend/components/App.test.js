// Write your tests here
import React from "react";
import AppFunctional from "./AppFunctional";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Render without errors", () => {
  render(<AppFunctional />);
});

test("When app mounts, coordinates exists on the screen", async () => {
  render(<AppFunctional />);
  const header = screen.getByText("Coordinates (2, 2)");
  expect(header).toBeInTheDocument;
});

test("Whatever", () => {
  render(<AppFunctional />);
  const text = screen.getByText(/you moved 0 times/i);
  expect(text).toBeInTheDocument;
});
