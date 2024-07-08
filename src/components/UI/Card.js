import './Card.css'
import ExpenseItem from '../Expenses/ExpenseItem';
import React from 'react';
import { ReactDOM } from 'react';

function Card(props) {
    const classes = 'card' + props.className;
    return <div className={classes}>{props.children}</div>
}
export default Card