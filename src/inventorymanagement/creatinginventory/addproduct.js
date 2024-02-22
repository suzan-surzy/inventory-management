import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import './addproduct.css'
import USERICON from '../image/user icon.png'
import FACEBOOK from '../image/facebook.png'
import WHATSAPP from '../image/whatsapp.jfif'
import HUMBURGER from '../image/humburger.png'


export default function Addproduct() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
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
 
  // const saveProductsToLocal = () => {
  //   const productsJSON = JSON.stringify(item);
  //   localStorage.setItem('saveditem', productsJSON);
  //   console.log(item)
  // };

  const saveProductsToLocal = () => {
    try {
        const productsJSON = JSON.stringify(item);
        localStorage.setItem('saveditem', productsJSON);
        console.log(item)
        alert('Product saved successfully!');
        navigate('/removeproduct');
        // const users = JSON.parse(localStorage.getItem('users')) || [];
        // const user = users.find(u => u.email === userDetail.email && u.password === userDetail.password);
 
        // if (user) {
        // sessionStorage.setItem('email', user.email);
        // sessionStorage.setItem('password', user.password);
        // navigate('/');
        // console.log(user)
        // } else {
        //  alert('Invalid email or password,please input a valid email and password.');
        // }
    } catch (error) {
        console.error('Error saving to local storage:', error);
        // Handle the error, e.g., show a user-friendly message
    }
};


    return (
      <>
        <Container fluid>
          <Row>
            <Col>
            <nav>
              <h1 className="kidologo">kido inventory</h1>
              <div className="menu-toggle"  onClick={toggleMenu}><img style={{height:'4rem'}} src={HUMBURGER} alt=""/></div>
              <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
                  <li><Link to="/" >Home</Link></li>
                  <li><Link to="/addproduct" >add product</Link></li>
                  <li><Link to="/removeproduct" >Dashboard</Link></li>
                  <li><Link to="/signup" >Signup</Link></li>
                  <li className="signin">
                      <img className="signinimage" src={USERICON} alt=""/>
                      <Link to="/signin" >Signin</Link>
                  </li>
              </ul>
           </nav>
           </Col>
          </Row>
          <Row>
                <Col>
                {/* {userDetail.email && userDetail.password ? (
                  <> */}
                  <h1 className="product">Product List</h1>
                    <div className="containerdiv">
                        <Form >
                            <label style={{padding:'10px'}} >product name : 
                            <input type="text" className="formcontrol" name="productName" value={newItem.productName} onChange={handleInputChange} required />
                            </label>
                            <br />
                            <label style={{padding:'10px'}} >quantity : 
                            <input type="number" className="formcontrol" name="productQuantity" value={newItem.productQuantity} onChange={handleInputChange} required />
                            </label>
                            <br />
                            <label style={{padding:'10px'}} >price : 
                            <input type="number" className="formcontrol" name="productPrice" value={newItem.productPrice} onChange={handleInputChange} required />
                            </label>
                            <br/>
                            <button style={{padding:'10px',margin:'20px'}} type="button" onClick={handleAddProduct}>
                                add
                            </button>
                            <button style={{padding:'10px',margin:'20px'}} type="submit" onClick={saveProductsToLocal}>Save to Local Storage</button>
                        </Form>

                        
                          <table className="containertable">
                            <thead>
                              <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>quantity</th>
                                <th>Price</th>
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
                    {/* </>
                     ) : (
                       <p>you don't have any account</p>
                    )} */}
                </Col>
            </Row>
            <Row>
             <Col>
                <footer>
                  <h1 className="footerlogo">Kido inventory</h1>
                  <div className="footerdiv">
                   <div className="contact">
                       <p style={{marginBottom:'10px'}}>Email -kidoinventory@gmail.com</p>
                       <p style={{marginBottom:'10px'}}>Contact - 09025356723</p>
                       <p>blogs</p>
                   </div>
                   <div className="policy">
                     <p className="privacy">blog</p>
                     <p className="cookie">about</p>
                     <p className="service">Terms of service</p>
                   </div>
                   <div className="connectus">
                    <h3>Connect With Us</h3>
                     <div className="web">
                      <img className="facebook" src={FACEBOOK} alt=""/>
                      <img  className="whatsapp" src={WHATSAPP} alt=""/>
                     </div>
                   </div>
                  </div>
                  <div className="copyright">
                     <h2><Link to="/" className="signoutlink" >Signout</Link></h2>
                     <h3>© 2024, Kido Inventory Ltd. All Rights Reserved</h3>
                  </div>
                </footer>
             </Col>
           </Row>
        </Container>
        </>
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