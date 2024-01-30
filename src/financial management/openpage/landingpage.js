// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import "./landingpage.css";
import LOGO from "../image/financial.png";
import Budget from "../image/budgeting.jfif";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Image1 from '../image/financialasset1.jfif';
import Image2 from '../image/financialasset2.jfif';
import Image3 from '../image/financialasset3.jfif';
import Money from '../image/budget money.png'


// const images = [image1, image2, image3];
  
export default function Landingpage() {
  const [changeImage,setChangeImage] = useState({
    image : Image1,
    caption: "hi"
  })

  setTimeout(()=>{
    setChangeImage({
      src:changeImage.image === Image1 ? Image2 : Image3,
      caption: changeImage.caption === "hi" ? "me" : "to"
    })
   
    },3000)

   return (
    <>
      <Container fluid>
        <Row>
          <Col xs={12} md={12}>
            <div className="header">
              <div className="sfm">
                <h2 className="flextwo">SFM</h2>
                <img className="logoimage" src={LOGO} alt="" />
              </div>
              <div className="budgeting">
              <h3><Link to="/savingsplanner" className="saving">savings</Link></h3>
              <h3><Link to="/budgetplaner" className="budget">budgeting</Link></h3>
             
            </div>
             <div className="signup"><h3><Link to="/signin" className="signin">sign-in</Link></h3></div>
            </div>
            </Col>
            </Row>
          <Row>
            <Col xs={12} md={12}>
            <div className="web" >
            <div>
              <img className="budgetmoney" src={changeImage.src} alt=""/>
               <p className="imagecaption">{changeImage.caption}</p>
            </div>
            </div>
          </Col>
          </Row>
          <Row>
          <Col xs={12} md={12}>
            <div className="futurebudget">
              <p className="future">
                budget, saving and track your financial transactions for future
                purposes
              </p>
              <img className="budegtimage" src={Budget} alt="" />
            </div>
            <Row>
          <Col xs={12} md = {6}>
            <div className="tracker">
              <img src={Money} alt=""/>
              <p>tracker</p>
            </div>
          </Col>
        </Row>
            <div className="formbody">
              <div className="welcome">
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
               <Form.Label className="mt-3">feel free to suggect</Form.Label>
               <Form.Control as="textarea" rows={3} />
               </Form.Group>
               <button type="submit"className="btn btn-primary mt-3">submit</button>
              </div>
            </div>
          </Col>
        </Row>
        
        <Row>
          <Col xs={12}>
            <footer>
              <div>
                <h2>About us</h2>
                <h2>Contact</h2>
              </div>
            </footer>
          </Col>
        </Row>
      </Container>
    </>
  );
}
