// import React, { useEffect,useState } from "react";
// import { Form } from "react-bootstrap";
// import './signin.css'
// import { useNavigate } from 'react-router-dom';
// // import { stringify } from "uuid";

// export default function Signin() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   useEffect(() => {
//     setEmail(localStorage.getItem('detail'))
//   }, []);
  
//   const handleClick = () => {
//     sessionStorage.setItem('email', email);
//     sessionStorage.setItem('password', password);
//     navigate('/');
//   }
  

//   return (
//     <div className="formdiv">
//       <form className="fillform">
//         <h1 className="signindata">Sign-In</h1>
//         <label style={{display:'flex',flexDirection:'column',gap:'10px'}}>
//           email address
//           <Form.Control
//             style={{height:'30px',padding:'20px',borderRadius:'10px',border:'1px solid white'}}
//             type="email"
//             placeholder="input your email address"
//             required = 'required'
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </label>
//         <br />
//         <label style={{display:'flex',flexDirection:'column',gap:'10px'}}>
//           password
//           <Form.Control
//             style={{height:'30px',padding:'20px',borderRadius:'10px',border:'1px solid white'}}
//             type="password"
//             placeholder="input your password"
//             required = 'required'
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </label>
//         <br />
//         <button className="btnsubmit" type="button" onClick={handleClick}>sigin</button>
//       </form>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import './signin.css';

export default function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setError('');
  }, [email, password]);


  const handleSignIn = () => {
    const users = localStorage.getItem('users');
    if (users) {
      const parsedUsers = JSON.parse(users);
      const user = parsedUsers.find(u => u.email === email && u.password === password);

      if (user) {
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('password', password);
        navigate('/');
      } else {
        setError(alert('Invalid email or password. Please sign up.'));
      }
    } 
    // else {
    //   setError(alert('No users found. Please sign up.'));
    // }
  }

  return (
    <div className="formdiv">
      <form className="fillform">
        <h1 className="signindata">Sign-In</h1>
        <label style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          Email Address:
          <Form.Control
            style={{height:'30px',padding:'20px',borderRadius:'10px',border:'1px solid white'}}
            type="email"
            placeholder="Enter your email address"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label style={{display:'flex',flexDirection:'column',gap:'10px'}}>
          Password:
          <Form.Control
            style={{height:'30px',padding:'20px',borderRadius:'10px',border:'1px solid white'}}
            type="password"
            placeholder="Enter your password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {error && <p className="error-message">{error}</p>}
        <button className="btnsubmit" type="button" onClick={handleSignIn}>Sign In</button>
      </form>
    </div>
  );
}


// import React, { useState, useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import './App.css';

// const SignIn = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
  

//   useEffect(() => {
//     const userKey = `user_${username}`;
//     localStorage.getItem(userKey, JSON.stringify({ detailusername, password }));
//     console.log(userKey)
  
//     // if (storedUsername && storedPassword) {
//     //   // Automatically sign in with stored credentials
//     //   // setUsername(storedUsername);
//     //   // setPassword(storedPassword);
//     //   // handleSignIn();  
//     // }
//   },[]);

//   const handleSignIn = () => {
//     // Perform client-side validation
//     if (!username || !password) {
//       alert('Please enter both username/email and password.');
//       return;
//     }

//     // Store credentials in local storage
//     localStorage.setItem('username', username);
//     localStorage.setItem('password', password);

//     // In a real application, this is where you would make an API call to your backend for authentication

//     // Redirect to a dashboard or another route after successful authentication
//     // history.push('/dashboard');
//   };

//   return (
//     <div className="container">
//       <form>
//         <h2>Sign In</h2>
//         <label htmlFor="username">Username or Email:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="button" onClick={handleSignIn}>
//           Sign In
//         </button>
//       </form>
//       {/* <p>
//         Don't have an account? <li><Link to="/signup" >Sign Up</Link></li>
//       </p> */}
//     </div>
//   );
// };

// export default SignIn;

