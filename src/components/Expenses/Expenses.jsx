import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expenses.css'

const Expenses = (props) => {

  return (
    <div className='expenses'>
      <ExpenseItem
        title={props.expenseItems[0].title}
        amount={props.expenseItems[0].amount}
        date={props.expenseItems[0].date}
      />
      <ExpenseItem
        title={props.expenseItems[1].title}
        amount={props.expenseItems[1].amount}
        date={props.expenseItems[1].date}
      />
    </div>
  )
}

export default Expenses