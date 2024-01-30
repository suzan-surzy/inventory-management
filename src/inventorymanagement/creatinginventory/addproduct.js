import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './addproduct.css';

export default function Addproduct() {
  const [item,setItem] = useState([])
  const [newItem, setNewItem] = useState({
    productName: '',
    productQuantity: '',
    productPrice: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

const handleAddProduct = () => {
setItem(prevItems => [...prevItems, { ...newItem, id: prevItems.length + 1 }]);
setNewItem({
    productName: '',
    productQuantity: '',
    productPrice: '',
  })};
 
  const saveProductsToLocal = () => {
    const productsJSON = JSON.stringify(item);
    localStorage.setItem('saveditem', productsJSON);
    console.log(item)
  };

    return (
        <Container fluid>
            <Row>
                <Col>
                  <h1 className="product">Product List</h1>
                    <div className="containerdiv">
                        <form style={{padding:'30px'}}>
                            <label style={{padding:'10px'}} htmlFor='productName'>product name : </label>
                            <input type="text" className="formcontrol" name="productName" value={newItem.productName} onChange={handleInputChange} required />
                            <br />
                            <label style={{padding:'10px'}} htmlFor='productQuantity'>quantity : </label>
                            <input type="number" className="formcontrol" name="productQuantity" value={newItem.productQuantity} onChange={handleInputChange} required />
                            <br />
                            <label style={{padding:'10px'}} htmlFor='productPrice'>price : </label>
                            <input type="number" className="formcontrol" name="productPrice" value={newItem.productPrice} onChange={handleInputChange} required />
                            <br/>
                            <button style={{padding:'10px',margin:'20px'}} type="button" onClick={handleAddProduct}>
                                add
                            </button>
                            <button style={{padding:'10px',margin:'20px'}} onClick={saveProductsToLocal}>Save to Local Storage</button>
                        </form>

                        
                          <table style={{padding:'30px'}}>
                            <thead>
                              <tr>
                                <th style={{padding:'10px',fontSize:'15px',fontFamily:'sans-serif'}}>ID</th>
                                <th style={{padding:'10px',fontSize:'15px',fontFamily:'sans-serif'}}>Name</th>
                                <th style={{padding:'10px',fontSize:'15px',fontFamily:'sans-serif'}}>quantity</th>
                                <th style={{padding:'10px',fontSize:'15px',fontFamily:'sans-serif'}}>Price</th>
                              </tr>
                            </thead>
                            <tbody>
                          {item.map(product => (
                              <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.productName}</td>
                                <td>${product.productQuantity}</td>
                                <td>${product.productPrice}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}



// import React, { useState, useEffect } from 'react';

// const ProductListComponent = () => {
  // State to hold the list of products
//   const [products, setProducts] = useState([
//     { id: 1, name: 'Product 1', price: 19.99 },
//     { id: 2, name: 'Product 2', price: 29.99 },
//     // Add more initial products as needed
//   ]);

//   // State to hold the new product input
//   const [newProduct, setNewProduct] = useState({ name: '', price: '' });

//   // useEffect to fetch the products from local storage on component mount
//   useEffect(() => {
//     const savedProductsJSON = localStorage.getItem('savedProducts');

//     // Check if there are saved products in local storage
//     if (savedProductsJSON) {
//       const savedProducts = JSON.parse(savedProductsJSON);
//       setProducts(savedProducts);
//     }
//   }, []); // Empty dependency array ensures the effect runs only once on mount

//   // Function to handle changes in the new product input
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewProduct({ ...newProduct, [name]: value });
//   };

//   // Function to add a new product to the list
//   const addProduct = () => {
//     if (newProduct.name && newProduct.price) {
//       const updatedProducts = [...products, { id: products.length + 1, ...newProduct }];
//       setProducts(updatedProducts);
//       setNewProduct({ name: '', price: '' });
//       console.log('Updated Products:', updatedProducts);
//     }
    
//   };

//   // Function to save the products to local storage
//   const saveProductsToLocal = () => {
//     const productsJSON = JSON.stringify(products);
//     localStorage.setItem('savedProducts', productsJSON);
//   };

//   return (
//     <div>
//       <h1>Product List</h1>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>
//           {products.map(product => (
//             <tr key={product.id}>
//               <td>{product.id}</td>
//               <td>{product.name}</td>
//               <td>${product.price}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div>
//         <h2>Add New Product</h2>
//         <label>Name: </label>
//         <input
//           type="text"
//           name="name"
//           value={newProduct.name}
//           onChange={handleInputChange}
//         />
//         <label>Price: </label>
//         <input
//           type="text"
//           name="price"
//           value={newProduct.price}
//           onChange={handleInputChange}
//         />
//         <button onClick={addProduct}>Add Product</button>
//       </div>

//       <button onClick={saveProductsToLocal}>Save Products to Local Storage</button>
//     </div>
//   );
// };

// export default ProductListComponent;