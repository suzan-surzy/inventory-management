import React from 'react';
import './savingplan.css'

const SavingsGoalDetail = ({ savingsGoals }) => {
  const { title, targetAmount, currentAmount, targetDate } = savingsGoals;

  const progressPercentage = ((currentAmount / targetAmount) * 100).toFixed(2);

  return (
    
    <div >
      <h3 className='title' >{title}</h3>
      <p className='targetamount'>Target Amount: ${targetAmount}</p>
      <p className='currentamount'>Current Amount: ${currentAmount}</p>
      <p className='targetdate'>Target Date: {targetDate}</p>
      <p className='progress'>Progress: {progressPercentage}%</p>
      {/* Additional details or actions */}
    </div>
   
  );
};

export default SavingsGoalDetail;
