import './ExpenseApp.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
// import pool from './db.js'; pg library usable in NodeJS environment, 
// react app runs in browser & browser can't run server side code like
// database queries


// const getExpenses = async () => {
//     const result = await pool.query('SELECT * FROM expenses');
//     console.log(result.rows);
// };
// getExpenses();

function IncomeItem({name, amount}) {
    return (
        <>
            <li>
                <span>{name}</span>
                <span> - </span>
                <span>Rs. {amount}</span>
                <span> - </span>
                <label htmlFor="income-tag">
                    <select name={name} id="income-tag">
                        <option value="salary">Salary</option>
                        <option value="dividend">Dividend</option>
                        <option value="other-income">Other income</option>
                    </select>
                </label>
            </li>
        </>
    )
}

function ExpenseItem({name, amount}) {
    return (
        <>
            <li>
                <span>{name}</span>
                <span> - </span>
                <span>Rs. {amount}</span>
                <span> - </span>
                <label htmlFor="expense-tag">
                    <select name={name} id="expense-tag">
                        <option value="food">Food</option>
                        <option value="rent">Rent</option>
                        <option value="healthcare">Healthcare</option>
                    </select>
                </label>
            </li>
        </>
    )
}

const expenses = [
    {
        name: "groceries",
        amount: 15000,
    },
    {
        name: "utilities",
        amount: 18000,
    }
]

export default function ExpenseApp() {
    const [array, setArray] = useState([]);
    
    const fetchAPI = async () => {
        const response = await axios.get('http://localhost:8080/api');
        setArray(response.data.fruits);
        console.log(response.data.fruits)
    };
    
    useEffect(() => {
        fetchAPI();
    }, [])

    function addIncome() {
        // add a form field in html that gives input to this function
        // store data in database
        // show data on the web app
    }
    
    return (
        <>
        
        <div className="head">
            <h1>Expense app1</h1>
        </div>

        <div className="main-layout">
        
            <div className="income">
                <h3>Income items</h3>
                <ul>
                    <IncomeItem name={"dummy item 2"} amount={5000} />
                    <IncomeItem name={"dummy item 3"} amount={10000} />
                </ul>
            </div>
        
            <div className="expense">
                <h3>Expense items</h3>
                <ul>
                    <ExpenseItem name={"dummy item 4"} amount={3500} />
                    <ExpenseItem name={"dummy item 5"} amount={4200} />
                </ul>
            </div>

            <div className="expense">
                <h3>Expense array</h3>
                <ul>
                    {
                        expenses.map( item => {
                            return <ExpenseItem name={item.name} amount={item.amount} />
                        })
                    }
                </ul>
            </div>
        
        </div>
        
        <div className="main-layout">
            <div className="expense">
                <ul>
                    {array.map((fruit, index) => {
                        return <li key={index}>{fruit}</li>;
                    })}
                </ul>
            </div>
        </div>

        </>
    )
}

