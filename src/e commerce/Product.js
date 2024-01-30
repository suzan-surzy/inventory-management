import React,{useEffect,useState} from "react";

import {Container,Row,Col} from "react-bootstrap"
import {Link} from 'react-router-dom'


export default function Product(){
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState('')
    const [alertError,setAlertError] = useState()
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/1')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setProducts(data)
            setLoading(true)
        })
        .catch((error)=>{
            console.log(error)
            setLoading(false)
        })
    })
    return(
        <>
        <Container>
            <Row >
                <Col>
                  <Link to = '/'>home</Link>
                </Col>
                <Col>
                  <Link to = '/about'>about</Link>
                </Col>
                <Col>
                  <Link to = '/ contact'>contact</Link>
                </Col>
            </Row>
        </Container>
        <div className="parent">
            product
            {
                loading?
                <Spinner animation="border" />
                :
                products.map((Product) => {
                    return(
                        <div key={products.id} className="child">
                            <img className="child-img" src={products.image} alt=""/>
                            <p className="child-title">{products.title}</p>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}


// import React, { useState } from 'react';

// const SavingsPlan = () => {
//   const [savingsGoal, setSavingsGoal] = useState(0);
//   const [currentSavings, setCurrentSavings] = useState(0);

//   const handleInputChange = (event) => {
//     setSavingsGoal(parseInt(event.target.value, 10));
//   };

//   const handleSave = () => {
//     // You can add additional logic here, e.g., validate the input, handle saving to a database, etc.
//     setCurrentSavings(currentSavings + savingsGoal);
//     setSavingsGoal(0); // Reset the input field after saving
//   };

//   return (
//     <div>
//       <h2>Savings Plan</h2>
//       <p>Current Savings: ${currentSavings}</p>
//       <label>
//         Enter Savings Goal:
//         <input type="number" value={savingsGoal} onChange={handleInputChange} />
//       </label>
//       <button onClick={handleSave}>Save</button>
//     </div>
//   );
// };

// export default SavingsPlan;
