import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
console.log(AppContext)
export default function Expensetotal() {
  const {expenses} = useContext(AppContext)
  console.log(expenses)
  const totalExpenses = expenses ? expenses.reduce((total, item) =>
   total + item.cost, 0) : 0;

    return(
        <div className="alert alert-secondary">
           <span>
             spent so far : ${totalExpenses}
           </span>
        </div>
    )
}