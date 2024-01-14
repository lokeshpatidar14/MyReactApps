import { useState } from "react";
import ExpenseForm from "./components/Expenses/ExpenseForm";
import ExpenseItem from "./components/Expenses/ExpenseItem";
import "./components/Expenses/ExpenseItem.css";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";

function App() {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const updatedExpenses = [
      ...expenses,
      { ...enteredExpenseData, id: Math.random().toString() },
    ];
    setExpenses(updatedExpenses);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div className="expenses">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <h2>
        {" "}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </h2>
    </div>
  );
}
export default App;
