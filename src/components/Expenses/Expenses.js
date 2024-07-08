import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import React from 'react';
import ReactDOM from 'react-dom';

function Expenses(props) {
    return (
        <Card className='expenses'>
            {props.item.map(
                expense =>
                (<ExpenseItem
                    key={expense.id}
                    date={expense.date}
                    title={expense.title}
                    amount={expense.amount} />)

            )}
            {/* 
            <ExpenseItem date={item[1].date} title={item[1].title} amount={item[1].amount} />
            <ExpenseItem date={item[2].date} title={item[2].title} amount={item[2].amount} />
            <ExpenseItem date={item[3].date} title={item[3].title} amount={item[3].amount} /> */}
        </Card>
    )
}
export default Expenses