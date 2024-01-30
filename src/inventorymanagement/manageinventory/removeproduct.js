// import React from 'react';

// export default function RemoveProduct({ items, onRemoveProduct }) {
//   return (
//     <div>
//       <h3>Remove Product</h3>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item.productName} -{' '}
//             <button onClick={() => onRemoveProduct(index)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


import React, { useState } from 'react';
import './removeproduct.css'
// import { Link } from 'react-router-dom';

export default function RemoveProduct () {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem('saveditem')));


  const saveProductsToLocal = (updatedProducts) => {
    const productsJSON = JSON.stringify(updatedProducts);
    localStorage.setItem('savedproduct', productsJSON);
  };

  const handleAddProduct = (newProduct) => {
    const updatedProducts = products.map(product => {
      if (product.id === newProduct.id) {
        // Decrease the quantity by 1 when the product is sold
        return {
          ...product,
          productQuantity: product.productQuantity - 1,
          productPrice: product.productPrice - newProduct.productPrice // Assuming you want to decrease the price as well
        };
      }
      return product;
    });
  
    setProducts(updatedProducts);
    saveProductsToLocal(updatedProducts);
  };
  

  return (
    <div className='productlist'>
      <h1>Product Details</h1>
      <ul>
        {products.map(product => (
          <li style={{padding:'10px',fontSize: '20px',fontFamily: 'sans-serif'}} key={product.id}>
           productname : {product.productName} - ${product.productPrice} - Quantity: {product.productQuantity}
          </li>
        ))}
      </ul>
      <button onClick={() => handleAddProduct(products[0])}>
        Simulate Selling Product
      </button>
    </div>
  );
};


