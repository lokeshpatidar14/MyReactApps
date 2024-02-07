import React, { useState, useRef } from "react";
import "./MealItemForm.css";

function MealItemForm(props) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <div className="input">
      <form label="Amount" className="form" onSubmit={submitHandler}>
        <label htmlFor={"amount" + props.id}>Amount</label>
        <input
          ref={amountInputRef}
          id={"amount" + props.id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
        <button>Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form>
    </div>
  );
}

export default MealItemForm;
