import React, { useRef, useState } from "react";
import "./InputForm.css";

function InputForm({ addUser }) {
  const nameRef = useRef();
  const ageRef = useRef();
  const collegeRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const nameValue = nameRef.current.value.trim();
    const ageValue = ageRef.current.value.trim();
    const collegeValue = collegeRef.current.value.trim();

    if (!nameValue || isNaN(ageValue) || ageValue <= 0 || !collegeValue) {
      setModalMessage("Please enter valid name, age, and college.");
      setShowModal(true);
      return;
    }

    addUser({ name: nameValue, age: ageValue, college: collegeValue });
    nameRef.current.value = "";
    ageRef.current.value = "";
    collegeRef.current.value = "";
  };

  const closeModal = () => {
    setShowModal(false);
    setModalMessage("");
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="label-input">
          <label>
            Name:
            <input type="text" ref={nameRef} />
          </label>
          <label>
            Age:
            <input type="number" ref={ageRef} />
          </label>
          <label>
            College:
            <input type="text" ref={collegeRef} />
          </label>
        </div>
        <button className="centered-button" type="submit">
          Add User
        </button>
      </form>

      {showModal && (
        <div className="custom-modal">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default InputForm;
