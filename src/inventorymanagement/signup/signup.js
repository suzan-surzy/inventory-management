import React, { useState } from "react";
import { Form } from "react-bootstrap";
import './signup.css';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import USERICON from '../image/user icon.png'
import HUMBURGER from '../image/humburger.png'
import FACEBOOK from '../image/facebook1.svg'
import WHATSAPP from '../image/whatsapp1.svg'
import TWITTER from '../image/twitter1.svg'

export default function Signup() {
   const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
   const navigate = useNavigate();
   const [detail, setDetail] = useState({
      fname: '',
      surname: '',
      email: '',
      password: '',
      number: ''
   });
   

   const handleClick = () => {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(detail);
      localStorage.setItem('users', JSON.stringify(users));
      
      alert('You Have Successfully Sign Up');
      navigate('/');
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
                  <div className="detail">
                     <Form className="formdetail">
                        <h1 className="signupheader">Sign-Up</h1>
                        <label>
                           First Name:
                           <input
                              type="text"
                              name="fname"
                              className="inputdata"
                              placeholder="Your Answer"
                              required = "re"
                              onChange={(e) => setDetail({ ...detail, fname: e.target.value })}
                           />
                        </label>
                        <br />
                        <label>
                           Surname:
                           <input
                              type="text"
                              name="surname"
                              placeholder="Your Answer"
                              required
                              className="inputdata"
                              onChange={(e) => setDetail({ ...detail, surname: e.target.value })}
                           />
                        </label>
                        <br />
                        <label>
                           Email Address:
                           <input
                              type="email"
                              name="email"
                              placeholder="Your Answer"
                              className="inputdata"
                              required
                              onChange={(e) => setDetail({ ...detail, email: e.target.value })}
                           />
                        </label>
                        <br />
                        <label>
                           Password:
                           <input
                              type="password"
                              name="password"
                              placeholder="Your Answer"
                              required
                              className="inputdata"
                              onChange={(e) => setDetail({ ...detail, password: e.target.value })}
                           />
                        </label>
                        <br />
                        <label>
                          Phone Number:
                           <input
                              type="number"
                              name="number"
                              placeholder="Your Answer"
                              required
                              className="inputdata"
                              onChange={(e) => setDetail({ ...detail, number: e.target.value })}
                           />
                        </label>
                         <p className="formparagraph">Already have an account ?<Link to="/signin">sign-in</Link></p>
                        <br />
                        <button className="submit" type="submit" onClick={handleClick}>Register</button>
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
   )
}



