// import React from "react";
// import { useState,useEffect } from "react";
// import './welcome.css'
// import LOGO from '../image/financial.png'
// import { Link } from "react-router-dom";


// import React, { useState } from 'react';
// import './welcome.css';

// function App() {
//   const [balance, setBalance] = useState(0);
//   const [amount, setAmount] = useState('');

//   const saveMoney = () => {
//     if (!isNaN(amount) && amount > 0) {
//       setBalance((prevBalance) => prevBalance + parseFloat(amount));
//       setAmount('');
//     }
//   };

//   const withdrawMoney = () => {
//     if (!isNaN(amount) && amount > 0 && amount <= balance) {
//       setBalance((prevBalance) => prevBalance - parseFloat(amount));
//       setAmount('');
//     }
//   };

//   return (
//     <div className="App">
//       <h1>Savings App</h1>
//       <p>Balance: ${balance.toFixed(2)}</p>

//       <div>
//         <label htmlFor="amount">Amount:</label>
//         <input
//           type="number"
//           id="amount"
//           value={amount}
//           onChange={(e) => setAmount(e.target.value)}
//         />
//       </div>

//       <div>
//         <button onClick={saveMoney}>Save</button>
//         <button onClick={withdrawMoney}>Withdraw</button>
//       </div>
//     </div>
//   );
// }

// export default App;


// export default function Welcome (){
//     let [text,setText] = useState("SFM APP")
    
//     setTimeout(() => {
//         setText(text='get full control of your spending')
//     }, 3000);

// useEffect(()=>{
 
// },[])

//  return(
//     <>
//     <div className="body">
//     <div className="welcome">
//         <img className="landingimage" src={LOGO} alt="" />
//         <br/>
//         <h1 className="text">
//             {text}
          
//         </h1>
//         <br/>
//         <button>
       
  
    // {/* <ul>
    //   <li><Link to="/">landingpage</Link></li>
    //   <li><Link to="/savingsplanner">saving</Link></li>
    //   <li><Link to="/budgetplaner">budgeting</Link></li>
    // </ul> */}


//         </button>

        
//     </div>
//     </div>
//     </>
//  )
// }
// YourComponent.js

// import React from 'react';
// import { Link } from 'react-router-dom';

// const YourComponent = () => {
//   return (
//     <div>
//       <h2>Your Component</h2>
//       <button>
//         <Link to="/another">Go to Another Page</Link>
//       </button>
//     </div>
//   );
// };

// export default YourComponent;



