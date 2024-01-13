import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [newtitle, setTitle] = useState("");
  const [newamount, setAmount] = useState("");
  const [newdate, setDate] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const showInConsole = () => {
    console.log(newtitle, newamount, newdate);
  };
  const handleSubmitForm = (event) => {
    event.preventDefault();

    const expenseData = {
      title: newtitle,
      amount: newamount,
      date: new Date(newdate),
    };
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="new-expense">
      <form onSubmit={handleSubmitForm}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={newtitle} onChange={handleTitleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={newamount}
              onChange={handleAmountChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={newdate}
              onChange={handleDateChange}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </div>
  );
}

export default ExpenseForm;
