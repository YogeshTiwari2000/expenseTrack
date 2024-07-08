import './ExpenseItem.css';
import './ExpenseDate'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';
import { ReactDOM } from 'react';


function ExpenseItem({ date, amount, title }) {

    // const [title, setTitle] = useState(props.title);
    // const [input, setInput] = useState("")

    // const clickHandler = () => {
    //     setTitle(input);
    // }

    return (
        <Card className=' expense-item'>
            {/* <ExpenseDate date={date} /> */}
            <div className='expense-item_description'>
                <h2>{title}</h2>
                <div className='expense-item_price'>${amount}</div>
            </div>
            {/* <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={clickHandler}>Change Title</button> */}
        </Card>
    )

}
export default ExpenseItem