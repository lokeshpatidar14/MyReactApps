import React, { useState } from "react";
import "./InputForm.css";

function InputForm({ addUser }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || isNaN(age) || age <= 0) {
      alert("Please enter valid name and age.");
      return;
    }
    addUser({ name, age });
    setName("");
    setAge("");
  };

  const handleInputName = (event) => {
    setName(event.target.value);
  };
  const handleInputAge = (event) => {
    setAge(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
    <div className="label-input">
      <label>
        Name:
        <input type="text" value={name} onChange={handleInputName} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={handleInputAge} />
      </label>
      </div>
      <button className="centered-button" type="submit">
        Add User
      </button>

    </form>
  );
}

export default InputForm;
