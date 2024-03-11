// import React from 'react';
// import { Link } from 'react-router-dom';
// import './signout.css'
// export default function Signout() {

//   const handleSignOut = () => {
//     sessionStorage.removeItem('email');
//     sessionStorage.removeItem('password');
//     // console.log(sessionStorage);
//   };

//   // In your component, add a button or link to trigger the sign-out
//   return (
//     <div className='signout'>
//       <h1>Good Bye</h1>
//       <Link to='/' onClick={handleSignOut}>Sign Out</Link>
      
//     </div>
    
//   );
// }

// Navbar.js
// import React, { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Check local storage for user data on component mount
//     const storedUser = JSON.parse(localStorage.getItem('user'));
//     if (storedUser) {
//       setUser(storedUser);
//     }
//   }, []);

//   const handleLogin = () => {
//     // Perform login logic, for now, let's simulate a login
//     const userData = { name: 'John Doe' };
//     setUser(userData);

//     // Save user data to local storage
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const handleLogout = () => {
//     // Perform logout logic, for now, let's simulate a logout
//     setUser(null);

//     // Remove user data from local storage
//     localStorage.removeItem('user');
//   };

//   return (
//     <nav>
//       <ul>
//         <li><a href="/">Home</a></li>
//         {user ? (
//           <li>
//             <span>Welcome, {user.name.charAt(0)}</span>
//             <button onClick={handleLogout}>Logout</button>
//           </li>
//         ) : (
//           <li>
//             <button onClick={handleLogin}>Login</button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';

const Product = ({ name, quantity, price }) => (
  <div>
    <p>Name: {name}</p>
    <p>Quantity: {quantity}</p>
    <p>Price: ${price}</p>
  </div>
);

const Warehouse = ({ name, products, onStockIn, onStockOut, checkAvailability }) => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(0);

  const handleStockIn = () => {
    if (productName && quantity > 0) {
      onStockIn({ warehouseName: name, productName, quantity });
      setProductName('');
      setQuantity(0);
    }
  };

  const handleStockOut = () => {
    if (productName && quantity > 0) {
      onStockOut({ warehouseName: name, productName, quantity });
      setProductName('');
      setQuantity(0);
    }
  };

  const handleCheckAvailability = () => {
    if (productName) {
      const { availableQuantity, unavailableProducts } = checkAvailability(name, productName);
      alert(`Available quantity of ${productName} in ${name}: ${availableQuantity}`);
      alert(`Unavailable products of ${productName} in ${name}: ${unavailableProducts.join(', ')}`);
    }
  };

  return (
    <div>
      <h3>Warehouse: {name}</h3>
      <div>
        <label>
          Product Name:
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
      </div>
      <button onClick={handleStockIn}>Stock In</button>
      <button onClick={handleStockOut}>Stock Out</button>
      <button onClick={handleCheckAvailability}>Check Availability</button>
      <h4>Products in Warehouse:</h4>
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

const InventoryManager = () => {
  const [warehouses, setWarehouses] = useState([
    { name: 'Warehouse A', products: [] },
    { name: 'Warehouse B', products: [] },
  ]);

  const handleStockIn = ({ warehouseName, productName, quantity }) => {
    setWarehouses((prevWarehouses) =>
      prevWarehouses.map((warehouse) => {
        if (warehouse.name === warehouseName) {
          const existingProduct = warehouse.products.find((p) => p.name === productName);
          if (existingProduct) {
            existingProduct.quantity += parseInt(quantity, 10);
          } else {
            warehouse.products.push({ name: productName, quantity: parseInt(quantity, 10), price: 0 });
          }
        }
        return warehouse;
      })
    );
  };

  const handleStockOut = ({ warehouseName, productName, quantity }) => {
    setWarehouses((prevWarehouses) =>
      prevWarehouses.map((warehouse) => {
        if (warehouse.name === warehouseName) {
          const existingProduct = warehouse.products.find((p) => p.name === productName);
          if (existingProduct && existingProduct.quantity >= parseInt(quantity, 10)) {
            existingProduct.quantity -= parseInt(quantity, 10);
          } else {
            alert('Insufficient quantity in stock for stock out.');
          }
        }
        return warehouse;
      })
    );
  };

  const checkAvailability = (warehouseName, productName) => {
    const warehouse = warehouses.find((w) => w.name === warehouseName);
    if (warehouse) {
      const product = warehouse.products.find((p) => p.name === productName);
      const availableQuantity = product ? product.quantity : 0;
      const unavailableProducts = warehouse.products
        .filter((p) => p.name === productName && p.quantity === 0)
        .map((p) => p.name);

      return { availableQuantity, unavailableProducts };
    }
    return { availableQuantity: 0, unavailableProducts: [] };
  };

  return (
    <div>
      <h2>Inventory Management</h2>
      {warehouses.map((warehouse, index) => (
        <Warehouse
          key={index}
          {...warehouse}
          onStockIn={handleStockIn}
          onStockOut={handleStockOut}
          checkAvailability={checkAvailability}
        />
      ))}
    </div>
  );
};

export default InventoryManager;
