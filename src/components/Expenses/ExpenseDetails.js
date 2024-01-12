import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseDetails(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

  const titleChange = () => {
    setTitle("updated");
    console.log("clicked");
  };

  const amountChange = () => {
    setAmount("$100");
    console.log("clicked");
  };

  return (
    <Card className="expense-item__description">
      <h2>
        {title} <button onClick={titleChange}>Change title</button>
      </h2>
      <Card className="expense-item__price">${amount}</Card>
      <button onClick={amountChange}>Change amount</button>
    </Card>
  );
}

export default ExpenseDetails;
