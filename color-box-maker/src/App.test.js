import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

it("creates a red 300x250 box", function () {
  const { getByLabelText, queryByText, queryByAttribute } = render(<App />);

  // select the "red" "300" and "250" options
  const widthField = getByLabelText("Box Width:", { selector: "input" });
  const heightField = getByLabelText("Box Height:", { selector: "input" });
  const backgroundColorField = getByLabelText("Box Color:", {
    selector: "input",
  });
  const submitBtn = queryByText("Add!");
  fireEvent.change(widthField, { target: { value: "300" } });
  fireEvent.change(heightField, { target: { value: "250" } });
  fireEvent.change(backgroundColorField, { target: { value: "red" } });
  fireEvent.click(submitBtn);

  const newBox = queryByAttribute({ className: "Box" });
  expect(newBox).toBeInTheDocument();
});
