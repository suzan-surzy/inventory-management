
 import { useState } from "react";
 import './removeproduct.css'
 import Card from 'react-bootstrap/Card';
 import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import FACEBOOK from '../image/facebook1.svg'
import WHATSAPP from '../image/whatsapp1.svg'
import USERICON from '../image/user icon.png'
import HUMBURGER from '../image/humburger.png'
import TWITTER from '../image/twitter1.svg'


export default function RemoveProduct() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const checkProductAvailability = (productId) => {
    const productExists = products.some(product => product.id === productId);
  
    if (productExists) {
      alert("Product is available in your inventory.");
    } else {
      alert("Product not found in your inventory.");
    }
  };
  // ...

const handleDeleteProduct = (productId) => {
  // Check if the product exists
  const productToDelete = products.find(product => product.id === productId);

  if (!productToDelete) {
    // Product not found
    alert("Product not found");
    return;
  }

  // Ask for confirmation before deletion
  const confirmDelete = window.confirm(`Are you sure you want to delete ${productToDelete.productName}?`);

  if (confirmDelete) {
    // Delete the product
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
    saveProductsToLocal(updatedProducts);
  }
};

// ...

   const [products, setProducts] = useState(JSON.parse(localStorage.getItem('saveditem')));
  console.log(products)

  const saveProductsToLocal = (updatedProducts) => {
    const productsJSON = JSON.stringify(updatedProducts);
    localStorage.setItem('savedproduct', productsJSON);
  };
  const calculateTotalQuantity = () => {
    return products.reduce((total, product) => total + parseInt(product.productQuantity), 0);
  };
  const calculateTotalPrice = () => {
    return products.reduce((total, product) => total + parseInt(product.productPrice), 0);
  };
  // const handleDeleteProduct = (productId) => {
  //   const updatedProducts = products.filter(product => product.id !== productId);

  //   setProducts(updatedProducts);
  //   saveProductsToLocal(updatedProducts);
  // };
  // Function to handle increasing the quantity of a product
  const handleAdjustProduct = (productId, operation) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          productQuantity: operation === 'increase' ? product.productQuantity + 1 : product.productQuantity - 1,
          productPrice: operation === 'increase' ? product.productPrice + 1 : product.productPrice - 1,
        };
      }
      return product;
    });

    setProducts(updatedProducts);
    saveProductsToLocal(updatedProducts);
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
              <div className='productlist'>
                <h1 className="itemh1">Welcome To Your Dashboard</h1>
                  <div className='carddiv'>
                  <Card 
                  style={{ height: '15rem', backgroundColor: 'blue',display:'flex',justifyContent:'center',alignItems:'center', width: '90%', borderRadius: '10px' }}>
                    <Card.Body>
                      <Card.Title 
                        style={{ fontSize: '20px',color:'white',paddingBottom:'20px', fontFamily: 'fantasy' }}>item</Card.Title>
                      <Card.Text 
                        style={{ fontSize: '20px',color:'white', fontFamily: 'fantasy' }}>{products.length}</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card 
                      style={{ height: '15rem', backgroundColor: 'red', display:'flex',justifyContent:'center',alignItems:'center', width: '90%', borderRadius: '10px' }}>
                    <Card.Body>
                      <Card.Title 
                        style={{ fontSize: '20px',color:'white',paddingBottom:'20px', fontFamily: 'fantasy' }}>quantity </Card.Title>
                      <Card.Text 
                        style={{ fontSize: '20px',color:'white', fontFamily: 'fantasy' }}>{calculateTotalQuantity()}</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card 
                      style={{ height: '15rem', backgroundColor: 'green', display:'flex',justifyContent:'center',alignItems:'center',width: '90%', borderRadius: '10px' }}>
                    <Card.Body>
                      <Card.Title 
                        style={{ fontSize: '20px',color:'white',paddingBottom:'20px', fontFamily: 'fantasy' }}>price </Card.Title>
                      <Card.Text 
                        style={{ fontSize: '20px',color:'white', fontFamily: 'fantasy' }}>${calculateTotalPrice()}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
                
              <table className='containdiv'>
                  <thead>
                    <tr>
                      <th>S/N</th>
                      <th>Item</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Action</th>
                      <th>Delete-Item</th>
                      <th>Total Amount</th>
                      <th>Available Product</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map(product => (
                      <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.productName}</td>
                        <td>${product.productPrice}</td>
                        <td>{product.productQuantity}</td>
                        <td>
                          <button 
                          style={{margin :'2px',padding :'1px 3px 1px 3px'}} 
                          onClick={() => handleAdjustProduct(product.id, 'increase')}>+</button>
                          <button 
                          style={{margin :'2px',padding :'1px 3px 1px 3px'}} 
                          onClick={() => handleAdjustProduct(product.id, 'decrease')}>-</button>
                        </td>
                        <td>
                          <button 
                          style={{border:'1px solid black',fontSize:'10px', fontFamily:'fantasy',padding:'10px',borderRadius :'5px'}} 
                          onClick={() => handleDeleteProduct(product.id)}>Delete</button>
                        </td>
                        <td>${calculateTotalPrice()}</td>
                        <td>
                          <button
                            style={{ border: '1px solid black', fontSize: '10px', fontFamily: 'fantasy', padding: '10px', borderRadius: '5px' }}
                            onClick={() => checkProductAvailability(product.id)}
                          >
                            Available
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
             
           </div>
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
                              <p>Blogs</p>
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
                              <img  className="whatsapp" src={TWITTER} alt=""/>
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
};

