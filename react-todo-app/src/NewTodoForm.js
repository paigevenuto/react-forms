import React, { useState } from "react";

function NewTodoForm({ addTodo }) {
  const [formData, setFormData] = useState({
    task: "",
  });

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addTodo(formData);
    setFormData({
      task: "",
    });
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        name="task"
        data-testid="test-input"
        value={formData.task}
        onChange={handleChange}
        required
      />
      <button>Add Task</button>
    </form>
  );
}

export default NewTodoForm;
