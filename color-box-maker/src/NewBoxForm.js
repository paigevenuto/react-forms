import React, { useState } from "react";

function NewBoxForm({ addBox }) {
  const [formData, setFormData] = useState({
    backgroundColor: "",
    width: "",
    height: "",
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
    addBox(formData);
    setFormData({
      backgroundColor: "",
      width: "",
      height: "",
    });
  };

  return (
    <form className="NewBoxForm" onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor">Box Color:</label>
      <input
        list="backgroundColors"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
        required
      />
      <datalist id="backgroundColors">
        <option value="red" />
        <option value="blue" />
        <option value="green" />
        <option value="pink" />
        <option value="teal" />
        <option value="purple" />
        <option value="orange" />
        <option value="yellow" />
        <option value="magenta" />
      </datalist>
      <label htmlFor="width">Box Width:</label>
      <input
        type="number"
        name="width"
        value={formData.width}
        onChange={handleChange}
        required
      />
      <label htmlFor="height">Box Height:</label>
      <input
        type="number"
        name="height"
        value={formData.height}
        onChange={handleChange}
        required
      />
      <button>Add!</button>
    </form>
  );
}

export default NewBoxForm;
