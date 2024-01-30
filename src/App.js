import React from "react";
import Addproduct from "./inventorymanagement/creatinginventory/addproduct";
import Landingpage from'./inventorymanagement/landingpage/landingpage'
import Removeproduct from "./inventorymanagement/manageinventory/removeproduct"
import Signin from "./inventorymanagement/signin/signin";
import Signup from "./inventorymanagement/signup/signup";
import Signout from './inventorymanagement/signup/signout'
import { BrowserRouter,  Routes, Route} from 'react-router-dom';
 

export default function App(){
      return(
        <>
        <div>
        {/* <Landingpage/> */}
          <BrowserRouter>
          <Routes>
              
              <Route path="/" element={<Landingpage/>} />
              <Route path="/addproduct" element ={<Addproduct/>} />
              <Route path="/removeproduct" element={<Removeproduct/>} />
              <Route path="/signin" element={<Signin/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/signout" element={<Signout/>} />
              
            </Routes>
          </BrowserRouter>
       </div>
        </>
      )
  }


// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import AddProduct from './inventorymanagement/creatinginventory/addproduct';
// import RemoveProduct from './inventorymanagement/manageinventory/removeproduct';

// export default function App (){
//   return (
//     <BrowserRouter>
//         <Routes>
        
//         <Route path="/" element={<AddProduct/>} />
//         <Route path="/removeproduct" element={<RemoveProduct/>} />
//        </Routes>
//     </BrowserRouter>
//   );
// };



// import React, { useState } from 'react';
// import ProductList from './inventorymanagement/creatinginventory/productlist';

// export default function App() {
//   return (
//     <div>
//       <h1>Inventory Management System</h1>
//       <ProductList />
//     </div>
//   );
// }

//   return (
//     <div className="container mt-5">
//       <div className="row">
//         <div className="col-md-6 offset-md-3">
//           <label htmlFor="budgetValue" className="form-label">
//             Enter Budget:
//           </label>
//           <div className="input-group mb-3">
//             <input
//               type="number"
//               id="budgetValue"
//               className="form-control"
//               value={budgetValue}
//               onChange={(e) => setBudgetValue(e.target.value)}
//             />
//             <button
//               className="btn btn-primary"
//               onClick={handleSaveBudget}
//             >
//               Save Budget
//             </button>
//           </div>

//           {savedBudget && (
//             <div>
//               <p className="lead">Saved Budget: ${savedBudget.value}</p>
//               {!savedBudget.goalAchieved && (
//                 <button
//                   className="btn btn-danger"
//                   onClick={handleDeleteBudget}
//                 >
//                   Delete Budget
//                 </button>
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;


// export default function App(){
//     return(
//       <>
      
     
//      <div>
//      <BrowserRouter>
//      <Routes>
        
//         <Route path="/" element={<Landingpage/>} />
//         <Route path="/budgetplaner" element ={<BudgetPlanner/>} />
//         <Route path="/savingsplanner" element={<SavingsPlanner/>} />
//       </Routes>
//      </BrowserRouter>
//      </div>
//       </>
//     )
// }


// import React, { useState } from 'react';

// const App = () => {
//   const [budgetValue, setBudgetValue] = useState('');
//   const [savedBudget, setSavedBudget] = useState(null);

//   const handleSaveBudget = () => {
//     if (!budgetValue || isNaN(budgetValue)) {
//       alert('Please enter a valid budget value.');
//       return;
//     }

//     setSavedBudget({
//       value: parseFloat(budgetValue),
//       goalAchieved: false,
//     });

//     // You can save the budget value in your database or perform other actions here

//     // Clear the input field
//     setBudgetValue('');
//   };

//   const handleDeleteBudget = () => {
//     if (savedBudget && !savedBudget.goalAchieved) {
//       alert('Goal not achieved yet. Cannot delete.');
//       return;
//     }

//     setSavedBudget(null);

//     // You can perform actions like deleting the budget from the database here
//   };



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
  


