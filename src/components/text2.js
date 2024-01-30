import React, { useState } from 'react';

const RecurringTransactionForm = ({ addRecurringTransaction, categories }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('expense');
  const [category, setCategory] = useState('');
  const [frequency, setFrequency] = useState('monthly');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!categories.includes(category)) {
      // If category doesn't exist, add it
      // addCategory(category);
    }

    const newRecurringTransaction = {
      // id: recurringTransactions.length + 1,
      description,
      amount: parseFloat(amount),
      type,
      category,
      frequency,
    };

    addRecurringTransaction(newRecurringTransaction);

    // Clear form fields
    setDescription('');
    setAmount('');
    setType('expense');
    setCategory('');
    setFrequency('monthly');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for description, amount, type, category dropdown, and frequency */}
      <button type="submit">Add Recurring Transaction</button>
    </form>
  );
};

export default RecurringTransactionForm;
