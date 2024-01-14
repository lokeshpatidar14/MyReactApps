import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseDetails(props) {
 

  return (
    <Card className="expense-item__description">
      <h2>
        {props.title} 
      </h2>
      <Card className="expense-item__price">${props.amount}</Card>
    </Card>
  );
}

export default ExpenseDetails;
