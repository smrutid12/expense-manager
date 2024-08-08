import React, { useState } from "react";
import Expenseitem from "./Expenseitem";
import ExpensesFilter from "./ExpensesFilter";
import "./Expense.css";
import Card from "../UI/Card";

const Expense = (props) => {
  console.log(props,'hhhhhhhhhhhhhhhhh')
  const [filter, setFilter] = useState("2022");
  const filterClickHandler = (selectedYear) => {
    setFilter(selectedYear);
    console.log(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    console.log(expense.date.getFullYear());
    return expense.date.getFullYear().toString() === filter;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filter} onChangeFilter={filterClickHandler} />
        {filteredExpenses.map((expense) => (
          <Expenseitem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expense;
