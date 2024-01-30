// import React, { useState } from 'react';
// import TransactionForm from './TransactionForm';
// import TransactionList from './TransactionList';
// import Balance from './Balance';
// import RecurringTransactionForm from './RecurringTransactionForm';
// import RecurringTransactionList from './RecurringTransactionList';

// const App = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [categories, setCategories] = useState(['Income', 'Food', 'Utilities', 'Entertainment', 'Other']);
//   const [recurringTransactions, setRecurringTransactions] = useState([]);

//   const addTransaction = (newTransaction) => {
//     setTransactions([...transactions, newTransaction]);
//   };

//   const deleteTransaction = (id) => {
//     const updatedTransactions = transactions.filter((t) => t.id !== id);
//     setTransactions(updatedTransactions);
//   };

//   const addCategory = (newCategory) => {
//     setCategories([...categories, newCategory]);
//   };

//   const addRecurringTransaction = (newRecurringTransaction) => {
//     setRecurringTransactions([...recurringTransactions, newRecurringTransaction]);
//   };

//   const deleteRecurringTransaction = (id) => {
//     const updatedRecurringTransactions = recurringTransactions.filter((t) => t.id !== id);
//     setRecurringTransactions(updatedRecurringTransactions);
//   };

//   return (
//     <div>
//       <h1>Budget Planner</h1>
//       <TransactionForm addTransaction={addTransaction} categories={categories} addCategory={addCategory} />
//       <RecurringTransactionForm addRecurringTransaction={addRecurringTransaction} categories={categories} />
//       <Balance transactions={transactions} categories={categories} />
//       <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
//       <RecurringTransactionList recurringTransactions={recurringTransactions} deleteRecurringTransaction={deleteRecurringTransaction} />
//     </div>
//   );
// };

// export default App;
