import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './signin.css';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import USERICON from '../image/user icon.png'
import HUMBURGER from '../image/humburger.png'
import FACEBOOK from '../image/facebook.png'
import WHATSAPP from '../image/whatsapp.jfif'


export default function Signin() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const navigate = useNavigate();
  const [userDetail, setUserDetail] = useState({
    email: '',  // Initialize with an empty string or appropriate default value
    password: ''
  });
  const [error, setError] = useState('');


  const handleSignIn = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === userDetail.email && u.password === userDetail.password);
 
    if (user) {
       sessionStorage.setItem('email', user.email);
       sessionStorage.setItem('password', user.password);
       navigate('/');
       console.log(user)
    } else {
       setError('Invalid email or password,please input a valid email and password.');
    }
 }
 
  return (
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
            <div className="formdiv">
              <Form className="fillform">
                <h1 className="signindata">Sign-In</h1>
                <label style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                  Email Address:
                  <input
                    style={{height:'30px',padding:'20px',borderRadius:'10px',border:'1px solid white'}}
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    value={userDetail.email}
                    onChange={(e) => setUserDetail({ ...userDetail, email: e.target.value })}

                  />
                </label>
                <br />
                <label style={{display:'flex',flexDirection:'column',gap:'10px'}}>
                  Password:
                  <input
                    style={{height:'30px',padding:'20px',borderRadius:'10px',border:'1px solid white'}}
                    type="password"
                    name="password"
                    placeholder="Enter your password"
                    required
                    value={userDetail.password}
                    onChange={(e) => setUserDetail({ ...userDetail, password: e.target.value })}

                  />
                </label>
                 <p className="signinparagraph">Create an acount. <Link to="/signup">sign-up</Link></p>
                <br />
                {error && <p className="error-message">{error}</p>}
                <button className="btnsubmit" type="button" onClick={handleSignIn}>Submit</button>
              </Form> 
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
                       <p>blog</p>
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
  );
}


