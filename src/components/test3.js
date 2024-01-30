import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const ExpenseChart = ({ transactions }) => {
  // Calculate expenses by category
  const expenseData = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'expense') {
      acc[transaction.category] = (acc[transaction.category] || 0) + Math.abs(transaction.amount);
    }
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        data: Object.values(expenseData),
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4CAF50',
          '#9C27B0',
        ],
      },
    ],
  };

  return (
    <div>
      <h2>Expense Chart</h2>
      <Doughnut data={chartData} />
    </div>
  );
};

export default ExpenseChart;
