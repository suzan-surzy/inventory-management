// import { Container,Row,Col } from "react-bootstrap";
// import { useState,useEffect } from "react";

// export default function BudgetTracker(){
//     const [description,setDescription] = useState('')
//     const [amount,setAmount] = useState('')
//     useEffect(()=>{

//     },[])
//     return(
//        <div>
//         hello
//        </div>
//     )
// }


// import React, { useState } from 'react';

// const BudgetTracker = () => {
//   const [budgetValue, setBudgetValue] = useState('');
//   const [savedBudget, setSavedBudget] = useState(null);

//   const handleSaveBudget = () => {
//     if (!budgetValue || isNaN(budgetValue)) {
//       alert('Please enter a valid budget value.');
//       return;
//     }

//     setSavedBudget({
//       value: parseFloat(budgetValue),
//       goalAchieved: false,
//     });

//     // You can save the budget value in your database or perform other actions here

//     // Clear the input field
//     setBudgetValue('');
//   };

//   const handleDeleteBudget = () => {
//     if (savedBudget && !savedBudget.goalAchieved) {
//       alert('Goal not achieved yet. Cannot delete.');
//       return;
//     }

//     setSavedBudget(null);

//     // You can perform actions like deleting the budget from the database here
//   };

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <label htmlFor="budgetValue" className="form-label">
//             Enter Budget:
//           </label>
//           <div className="input-group mb-3">
//             <input
//               type="text"
//               id="budgetValue"
//               className="form-control"
//               value={budgetValue}
//               onChange={(e) => setBudgetValue(e.target.value)}
//             />
//             <button
//               className="btn btn-primary"
//               onClick={handleSaveBudget}
//             >
//               Save Budget
//             </button>
//           </div>

//           {savedBudget && (
//             <div>
//               <p className="lead">Saved Budget: ${savedBudget.value}</p>
//               {!savedBudget.goalAchieved && (
//                 <button
//                   className="btn btn-danger"
//                   onClick={handleDeleteBudget}
//                 >
//                   Delete Budget
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BudgetTracker;




import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Budget from './budget'
import Remaining from './remaining';
import ExpenseTotal from './expensetotal'
import ExpenseList from './expenselist';
import AddExpenseForm from './addexpenseform';
import {AppProvider} from '../../context/AppContext'



export default function BudgetPlanner(){
  return(
    <AppProvider>
       <div className='container'>
       <h1 className='mt-3'>budget planner</h1>
      <div className='row mt-3'>
         <div className='col-sm'>
           <Budget/>
         </div>
         <div className='col-sm'>
           <Remaining/>
         </div>
         <div className='col-sm'>
           <ExpenseTotal/>
         </div>
      </div>
      <h3 className='mt-3'>
        expenses
      </h3>
      <div className='row mt-3'>
       <div className='col-sm'>
         <ExpenseList/>
       </div>
      </div>
      <h3 className='mt-3'>add expenses</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenseForm/>
        </div>
      </div>
    </div>
    </AppProvider>
    
  )
}
// const BudgetPlanner = () => {
//   const [budget, setBudget] = useState(0);
//   const [transaction, setTransaction] = useState('');
//   const [transactions, setTransactions] = useState([]);
//   const [remainingBudget, setRemainingBudget] = useState(budget);

//   const handleBudgetChange = (e) => {
//     const enteredValue = e.target.value;
//     // Validate that the entered value is a valid number
//     if (!isNaN(enteredValue)) {
//       setBudget(Number(enteredValue));
//       updateRemainingBudget(transactions, Number(enteredValue));
//     }
//   };

//   const handleTransactionChange = (e) => {
//     setTransaction(e.target.value);
//   };

//   const handleAddTransaction = () => {
//     if (transaction !== '') {
//       const newTransaction = { id: Date.now(), description: transaction, amount: 10 }; // Replace 10 with your transaction amount
//       setTransactions([...transactions, newTransaction]);
//       setTransaction('');
//       updateRemainingBudget([...transactions, newTransaction], budget);
//     }
//   };

//   const handleDeleteTransaction = (id) => {
//     const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
//     setTransactions(updatedTransactions);
//     updateRemainingBudget(updatedTransactions, budget);
//   };

//   const updateRemainingBudget = (updatedTransactions, currentBudget) => {
//     const spentAmount = updatedTransactions.length > 0 ? updatedTransactions.length * 10 : 0; // Replace 10 with your transaction amount
//     const remaining = currentBudget - spentAmount;
//     setRemainingBudget(remaining);
//   };

//   const handleDeleteBudget = () => {
//     setBudget(0);
//     setTransactions([]);
//     setRemainingBudget(0);
//   };

//   return (
//     <div className="container">
//       <h2 className="mt-4 mb-4">Budget Planner</h2>
//       <div className="row">
//         <div className="col-md-6">
//           <label>
//             Set Your Budget:
//             <input type="number" className="form-control" value={budget} onChange={handleBudgetChange} />
//           </label>
//         </div>
//       </div>
//       <div className="row mt-4">
//         <div className="col-md-6">
//           <h3>Transactions</h3>
//           <ul className="list-group">
//             {transactions.map((t) => (
//               <li key={t.id} className="list-group-item d-flex justify-content-between align-items-center">
//                 {t.description}{' '}
//                 <button className="btn btn-danger btn-sm" onClick={() => handleDeleteTransaction(t.id)}>
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//           <label className="mt-3">
//             Add Transaction:
//             <input type="text" className="form-control" value={transaction} onChange={handleTransactionChange} />
//             <button className="btn btn-primary mt-2" onClick={handleAddTransaction}>
//               Add
//             </button>
//           </label>
//         </div>
//         <div className="col-md-6">
//           <p className="mt-4">Remaining Budget: ${remainingBudget.toLocaleString()}</p>
//           {remainingBudget <= 0 && (
//             <div>
//               <p>Congratulations! You've achieved your budget.</p>
//               <button className="btn btn-danger" onClick={handleDeleteBudget}>
//                 Delete Budget
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BudgetPlanner;
