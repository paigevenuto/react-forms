import React from "react";
import { render, fireEvent } from "@testing-library/react";
import BoxList from "./BoxList";

// smoke test
it("renders without crashing", function () {
  render(<BoxList />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("creates a red 300x250 box", function () {
  const { getByLabelText, queryByText, getAllByTestId } = render(<BoxList />);

  // select the "red" "300" and "250" options
  const widthField = getByLabelText("Box Width:", {
    selector: "input",
  });
  const heightField = getByLabelText("Box Height:", {
    selector: "input",
  });
  const backgroundColorField = getByLabelText("Box Color:", {
    selector: "input",
  });
  const submitBtn = queryByText("Add!");
  fireEvent.change(backgroundColorField, { target: { value: "red" } });
  fireEvent.change(widthField, { target: { value: "300" } });
  fireEvent.change(heightField, { target: { value: "250" } });

  expect(widthField.value).toBe("300");
  expect(heightField.value).toBe("250");
  expect(backgroundColorField.value).toBe("red");
  fireEvent.click(submitBtn);
  expect(widthField.value).toBe("");
  expect(heightField.value).toBe("");
  expect(backgroundColorField.value).toBe("");

  const boxes = getAllByTestId("Box");
  expect(boxes[0]).toHaveStyle("background-color: red;");
  expect(boxes[0]).toHaveStyle("width: 300px;");
  expect(boxes[0]).toHaveStyle("height: 250px;");
});
