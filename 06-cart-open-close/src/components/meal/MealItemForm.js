import React from "react";
import "./MealItemForm.css";

function MealItemForm(props) {
  return (
    <div className="input">
      <form label="Amount" className='form'>
        <label htmlFor={"amount" + props.id}>Amount</label>
        <input 
            id={"amount" + props.id}
            type="number"
            min="1"
            max="5"
            step="1"
            defaultValue="1"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default MealItemForm;
