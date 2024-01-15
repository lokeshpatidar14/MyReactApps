import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseData from "./ExpenseData";
import NewExpense from "./NewExpense";


const Expenses = () => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const expenseData = ExpenseData();
  const [expenses, setExpenses] = useState(expenseData);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const updatedExpenses = [
      ...expenses,
      { ...enteredExpenseData, id: Math.random().toString() },
    ];
    setExpenses(updatedExpenses);
  };

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
    <NewExpense onAddExpense={addExpenseHandler} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </div>
  );
};

export default Expenses;
