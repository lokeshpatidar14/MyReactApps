import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";


function ExpenseDetails(props) {
  const amount = props.amount;
  const title = props.title;
  return (
    <Card className="expense-item__description">
      <h2>{props.title}</h2>
      <Card className="expense-item__price">${props.amount}</Card>
    </Card>
  );
}

export default ExpenseDetails;
