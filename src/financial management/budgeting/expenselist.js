import React, { useContext } from "react";
import ExpenseItem from '../budgeting/expenseitem'
import { AppContext } from "../../context/AppContext";

export default function ExpenseList(){
    const {expenses} = useContext(AppContext)
        console.log(expenses)
    
    return(
      <ul className="list-group">
         {expenses.map((expense)=>(
            <ExpenseItem id = {expense.id}name={expense.name}cost={expense.cost}/>
         ))}
      </ul>  
    )
}