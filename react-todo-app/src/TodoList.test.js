import React from "react";
import { render, fireEvent, getNodeText } from "@testing-library/react";
import TodoList from "./TodoList";

// smoke test
it("renders without crashing", function () {
  render(<TodoList />);
});

// snapshot test
it("matches snapshot", function () {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("creates a new todo", function () {
  const { queryByText, queryByTestId } = render(<TodoList />);

  const taskInput = queryByTestId("test-input");
  const submitBtn = queryByText("Add Task");
  fireEvent.change(taskInput, { target: { value: "feed my cat" } });

  expect(taskInput.value).toBe("feed my cat");
  fireEvent.click(submitBtn);
  expect(taskInput.value).toBe("");

  let todoItem = queryByTestId("todo");
  todoItem = getNodeText(todoItem);
  expect(todoItem).toContain(`feed my cat`);
});
