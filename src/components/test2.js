import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      // id: transactions.length + 1,
      description,
      amount: parseFloat(amount),
      type,
      category,
    };

    addTransaction(newTransaction);

    // Clear form fields
    setDescription('');
    setAmount('');
    setType('expense');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for description, amount, type, and category dropdown */}
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
