// import React from "react";


// export default function Contact(){
//     return(
//         <div>
//             contact
//         </div>
//     )
// }


import React, { useState } from 'react';

const SavingsGoalForm = ({ addSavingsGoal, savingsGoals }) => {
  const [title, setTitle] = useState('');
  const [targetAmount, setTargetAmount] = useState('');
  const [targetDate, setTargetDate] = useState('');
  const [currentAmount,setCurrentAmount] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();

    const newSavingsGoal = {
      id: savingsGoals.length + 1,
      title,
      targetAmount: parseFloat(targetAmount),
      currentAmount: parseFloat(currentAmount),
      targetDate,
    };

    addSavingsGoal(newSavingsGoal);

    // Clear form fields
    setTitle('');
    setTargetAmount('');
    setTargetDate('');
    setCurrentAmount('')
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value, 10);
    // setTargetAmount(parseInt(event.target.value, 10))

  };
  const handleTargetAmountChange = (event) => {
    // setTitle(event.target.value, 10);
    setTargetAmount(parseInt(event.target.value, 10))

  };

  const handleTargetDateChange = (event) => {
    // setTitle(event.target.value, 10);
    setTargetDate(event.target.value, 10)

  };
  const handleCurrentAmountChange = (event) => {
    // setTitle(event.target.value, 10);
    setCurrentAmount(event.target.value, 10)

  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Input fields for title, target amount, and target date */}
      <label>
      <input type="number" value= {currentAmount} onChange={handleCurrentAmountChange} placeholder='enter your current amount' required />
      </label>
      <br/>
      <label>
        
        <input type="text" value= {title} onChange={handleTitleChange} placeholder='enter your plan' required />
      </label>
      <br/>
      <label>
      <input type="number" value= {targetAmount} onChange={handleTargetAmountChange} placeholder='enter your target amount' required />
      </label>
      <br/>
      <label>
      <input type="date" value= {targetDate} onChange={handleTargetDateChange} placeholder='enter the date' required />
      </label>
      <br/>
      <button type="submit">Add Savings Goal</button>
    </form>
  );
};

export default SavingsGoalForm;
