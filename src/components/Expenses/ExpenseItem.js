import { useState } from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";


function ExpenseItem(props) {
 


  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}> </ExpenseDate>
      </div>
      <ExpenseDetails
        amount={props.amount}
        location={props.location}
        title={props.title}
      />
     
    </Card>
  );
}

export default ExpenseItem;
