import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("render nav component", () => {
  const { getByText } = render(<App />);
  const nav = getByText(/women's world cup/i);
  expect(nav).toBeInTheDocument();
});

test("render footer component", () => {
  const { getByText } = render(<App />);
  const footer = getByText(/copyright/i);
  expect(footer).toBeInTheDocument();
});

test("render footer component", () => {
  const { getByTestId } = render(<App />);

  fireEvent.click(getByTestId("darkModeBtn"));

  const theBody = document.querySelector("body");

  expect(theBody).toHaveClass("darkMode");
});
