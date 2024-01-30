import React, { useState } from "react";
import { Form } from "react-bootstrap";
import './signup.css';
// import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
   const navigate = useNavigate();
   const [detail, setDetail] = useState({
      fname: '',
      surname: '',
      email: '',
      password: '',
      number: ''
   });
   
   const userKey = `user_${detail.fname}_${detail.surname}_${detail.email}_${detail.number}_${detail.password}`;
   localStorage.setItem(userKey, JSON.stringify(detail));
   

   const handleClick = () => {
      // localStorage.setItem('detail', JSON.stringify(detail));
      // console.log(localStorage)
      const userKey = `user_${detail.fname}_${detail.surname}_${detail.email}_${detail.number}_${detail.password}`;
   localStorage.setItem(userKey, JSON.stringify(detail));
   console.log(detail)
   console.log(userKey)
      // const userDetail = localStorage.getItem("detail")
      // const user = JSON.parse(userDetail)
      // console.log(user)
      navigate('/')
   }

   return (
      <div className="detail">
         <Form className="formdetail">
            <h1 className="signupheader">Sign-Up</h1>
            <label>
               First Name:
               <input
                  type="text"
                  className="inputdata"
                  required = "re"
                  onChange={(e) => setDetail({ ...detail, fname: e.target.value })}
               />
            </label>
            <br />
            <label>
               Surname:
               <input
                  type="text"
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
                  required
                  className="inputdata"
                  onChange={(e) => setDetail({ ...detail, password: e.target.value })}
               />
            </label>
            <br />
            <label>
               Number:
               <input
                  type="number"
                  required
                  className="inputdata"
                  onChange={(e) => setDetail({ ...detail, number: e.target.value })}
               />
            </label>
            <br />
            <button className="submit" type="button" onClick={handleClick}>Submit</button>
         </Form>
      </div>
   )
}
