// import React, { useState } from 'react';
// import TransactionForm from './TransactionForm';
// import TransactionList from './TransactionList';
// import Balance from './Balance';

// const App = () => {
//   const [transactions, setTransactions] = useState([]);
//   const [categories, setCategories] = useState(['Income', 'Food', 'Utilities', 'Entertainment', 'Other']);

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

//   return (
//     <div>
//       <h1>Budget Planner</h1>
//       <TransactionForm addTransaction={addTransaction} categories={categories} addCategory={addCategory} />
//       <Balance transactions={transactions} categories={categories} />
//       <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
//     </div>
//   );
// };

// export default App;
