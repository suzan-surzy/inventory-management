
// // src/PaymentForm.js
// import React, { useEffect, useState } from 'react';

// const PaymentForm = () => {
//   const [amount, setAmount] = useState('');
//   const [cardNumber, setCardNumber] = useState('');
//   const [expiryDate, setExpiryDate] = useState('');
//   const [cvc, setCvc] = useState('');
//   const [error, setError] = useState('');

//   const handlePayment = () => {
//     // Basic validation
//     if (!amount || !cardNumber || !expiryDate || !cvc) {
//       setError(alert('input the required information please'));
//       return;
//     }

//     // Here you would handle the payment using a payment gateway
//     // For simplicity, we'll just log the payment details to the console
//     console.log('Payment Details:', { amount, cardNumber, expiryDate, cvc });

//     // Reset form and error state after successful payment
//     setAmount('');
//     setCardNumber('');
//     setExpiryDate('');
//     setCvc('');
//     setError('');
//   };
//   useEffect(()=>{

//   },[])

//   return (
//     <div>
//       <label>
//         Amount:
//         <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Card Number:
//         <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Expiry Date:
//         <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         CVC:
//         <input type="text" value={cvc} onChange={(e) => setCvc(e.target.value)} />
//       </label>
//       <br />
//       <button onClick={handlePayment}>Pay</button>
      
//       {error && <div style={{ color: 'red' }}>{error}</div>}
//     </div>
//   );
// };

// export default PaymentForm;

import React from 'react';
import SavingsGoalDetail from './savingplandetail';
import './savingplan.css'

const SavingsGoalList = ({ savingsGoals, deleteSavingsGoal }) => {
  return (

    <div>
      <ul style={{height:'5rem'}}>
        {savingsGoals.map((savingsGoals) => (
          <li key={savingsGoals.id}>
            <SavingsGoalDetail savingsGoals={savingsGoals} />
            <button onClick={() => deleteSavingsGoal(savingsGoals.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default SavingsGoalList;
