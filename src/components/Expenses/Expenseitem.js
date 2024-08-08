import React, { useState } from "react";
import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
const Expenseitem = (props) => {
  const [title, setTitle] = useState(props.title); //react Hook

  const clickHandler = () => {
    setTitle("Updated!", title);
    console.log(title);
  };
  const doubleClickHandler = () => {
    setTitle("Double Clicked!!!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onLoad={doubleClickHandler} onClick={clickHandler}>
        Change
      </button>
    </Card>
  );
};

export default Expenseitem;
