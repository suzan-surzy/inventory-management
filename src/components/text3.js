import React from 'react';

const RecurringTransactionList = ({ recurringTransactions, deleteRecurringTransaction }) => {
  return (
    <div>
      <h2>Upcoming Recurring Transactions</h2>
      <ul>
        {recurringTransactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.description} - {transaction.amount} ({transaction.frequency})
            <button onClick={() => deleteRecurringTransaction(transaction.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecurringTransactionList;
