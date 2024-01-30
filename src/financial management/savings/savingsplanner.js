import { useState } from 'react';
import SavingsGoalForm from './savingsplanform';
import SavingsGoalList from './savingsplanlist';
// import SavingsPlan from './';
// import SavingsGoalDetail from './savingplandetail';

export default function SavingsPlanner(){
  const [savingsGoals, setSavingsGoals] = useState([]);
  

  const addSavingsGoal = (newSavingsGoal) => {
    setSavingsGoals([...savingsGoals, newSavingsGoal]);
  };

  const deleteSavingsGoal = (id) => {
    const updatedSavingsGoals = savingsGoals.filter((goal) => goal.id !== id);
    setSavingsGoals(updatedSavingsGoals);
  };
  
  return (
    <div className='body'>
    <div className='return'>
      <h1>Savings Planner</h1>
      <SavingsGoalForm addSavingsGoal={addSavingsGoal} savingsGoals={savingsGoals} />
      <SavingsGoalList savingsGoals={savingsGoals} deleteSavingsGoal={deleteSavingsGoal} />
      {/* <SavingsGoalDetail/> */}
    </div>
    </div>
  );
};

