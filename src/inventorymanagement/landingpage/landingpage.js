import React,{useState} from "react";
import './landingpage.css'
import { Container, Row, Col } from "react-bootstrap";
import LOGO from '../image/inventoryimage.webp'
import { Link } from "react-router-dom";
import USERICON from '../image/user icon.png'
import INVENTORY from '../image/downloadinventory.jfif'
import FACEBOOK from '../image/facebook.png'
import WHATSAPP from '../image/whatsapp.jfif'
import HUMBURGER from '../image/humburger.png'


export default function LandingPage() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
    return(
        <> 
         <Container fluid>
          <Row>
           
          <nav>
            <h1 className="kidologo">kido inventory</h1>
            <div className="menu-toggle"  onClick={toggleMenu}><img style={{height:'4rem'}} src={HUMBURGER} alt=""/></div>
            <ul className={`nav-list ${showMenu ? 'show' : ''}`}>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/addproduct" >Add product</Link></li>
                <li><Link to="/removeproduct" >Dashboard</Link></li>
                <li><Link to="/signup" >Signup</Link></li>
                <li className="signin">
                    <img className="signinimage" src={USERICON} alt=""/>
                    <Link to="/signin" >Signin</Link>
                </li>
            </ul>
        </nav>
           <div className="inventory">
              <h2 className="paragraph">The world is your marketplace,Manage and fillful orders on a go.</h2>
            </div>
           <Col/>
           </Row>
           <Row>
           <Col>
              <div className="goodsrecord">
              <p className="inventoryparagraph">Keep constant record of your goods and
               providing availability of goods,to enhance worderful services to the buyer.
                </p>
                <img className="inventoryimage" src={INVENTORY} alt=""/>
              </div>
            </Col>
           </Row>
           <Row>
             <Col>
               <div className="productimage">
                  <img className="logoimage" src={LOGO} alt=""/>
                  <p className="logoparagraph">Keep track of your perishable and non-prerishable goods, 
                  so you can keep your focus on your goods when it reduces at all time.</p>
               </div>
               </Col>
               
           </Row>
           <Row>
             <Col>
                <footer>
                  <h1 className="footerlogo">Kido inventory</h1>
                  <div className="footerdiv">
                   <div className="contact">
                       <p style={{marginBottom:'10px'}}>Email - kidoinventory@gmail.com</p>
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
                     <h2><Link to="/signout" className="signoutlink" >Signout</Link></h2>
                     <h3>© 2024, Kido Inventory Ltd. All Rights Reserved</h3>
                  </div>
                </footer>
             </Col>
           </Row>
         </Container>
        </>
    )
}