import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { v4 as uuid } from "uuid";
import _ from "lodash";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (formData) => {
    const { task } = formData;
    const id = uuid();
    const todosClone = _.cloneDeep(todos);
    todosClone.push({
      task,
      id,
    });
    setTodos(todosClone);
  };

  const delTodo = (evt) => {
    const todosClone = todos.filter(
      (todo) => todo.id !== evt.target.parentElement.id
    );
    setTodos(todosClone);
  };

  return (
    <ul className="TodoList">
      <NewTodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        <li id={todo.id}>
          {todo.task}
          <button onClick={delTodo}>X</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
