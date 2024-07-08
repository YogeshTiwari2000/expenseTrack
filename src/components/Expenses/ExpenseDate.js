import "./ExpenseDate.css";
import React from "react";
import { ReactDOM } from "react";

function ExpenseDate({ date }) {
    const month = date.toLocaleString('en-US', { month: 'long' });
    const year = date.getFullYear();
    const day = date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className="expense-date ">
            <p className="expense-date_month">{month}</p>
            <p className="expense-date_year ">{year}</p>
            <p className="expense-date_day">{day}</p>
        </div>
    )
}
export default ExpenseDate