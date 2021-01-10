import { render } from "@testing-library/react";
import React from "react";
import App from "./App";

xtest("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/echo karriere/i);
  expect(linkElement).toBeInTheDocument();
});
