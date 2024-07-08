import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

let DUMMY_EXPENSE = [
  {
    id: 'e1',
    date: new Date(2021, 3, 28),
    title: 'School Fee',
    amount: 300,
  },
  {
    id: 'e2',
    date: new Date(2021, 3, 15),
    title: 'Books',
    amount: 250,
  },
  {
    id: 'e3',
    date: new Date(2021, 3, 8),
    title: 'Food',
    amount: 200,
  },
  {
    id: 'e4',
    date: new Date(2021, 3, 28),
    title: 'Rent',
    amount: 540,
  }
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSE)
  // https://api.sampleapis.com/jokes/goodJokes
  // https://api.sampleapis.com/bitcoin/historical_prices
  // useEffect(() => {
  //   fetch(' https://api.sampleapis.com/bitcoin/historical_prices').then(

  //     response => {
  //       return response.json();
  //     }
  //   ).then(
  //     data => {
  //       console.log(data);
  //       setExpenses(data)
  //     }
  //   )
  // }, [])


  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense)
  }

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />

    </>
  );
}

export default App;
