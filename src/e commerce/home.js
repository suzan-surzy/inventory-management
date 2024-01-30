import React from 'react';

const SavingsGoalDetail = ({ savingsGoals }) => {
  const { title, targetAmount, currentAmount, targetDate } = savingsGoals;

  const progressPercentage = ((currentAmount / targetAmount) * 100).toFixed(2);

  return (
    <div>
      <h3>{title}</h3>
      <p>Target Amount: ${targetAmount}</p>
      <p>Current Amount: ${currentAmount}</p>
      <p>Target Date: {targetDate}</p>
      <p>Progress: {progressPercentage}%</p>
      {/* Additional details or actions */}
    </div>
  );
};

export default SavingsGoalDetail;
