import React from 'react';
import { Link } from 'react-router-dom';
import './signout.css'
export default function Signout() {

  const handleSignOut = () => {
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    // console.log(sessionStorage);
  };

  // In your component, add a button or link to trigger the sign-out
  return (
    <div className='signout'>
      <h1>Good Bye</h1>
      <Link to='/' onClick={handleSignOut}>Sign Out</Link>
      
    </div>
    
  );
}
