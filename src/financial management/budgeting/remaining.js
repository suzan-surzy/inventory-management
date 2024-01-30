import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export default function Remaining() {
  const { expenses, budget } = useContext(AppContext);
  console.log(expenses);

  const totalExpenses = expenses.reduce((total, item) => {
    return total + item.cost;
  }, 0);

  const alertType = totalExpenses > budget ? 'alert-danger' : 'alert-success';

  return (
    <div className={`alert ${alertType}`}>
      <span>
        Remaining: ${budget - totalExpenses}
      </span>
    </div>
  );
}
