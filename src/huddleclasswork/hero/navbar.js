import React from "react";
import './navbar.css'
import LOGO from '../images/logo.svg'
import MOCKUP from '../images/illustration-mockups.svg'


function BuildTheCommunity(){
    return(
       <div className="navbar">
          <div className="imagelogo">
            <img src={LOGO} alt="logo image"/>
            <button className="btn">Try It Free</button>
          </div>
          <div className="seperate">
           <div className="build">
           <h1>
              Build The Community Your Fans Will Love
            </h1>
            <p>
            Huddle re-imagines the way we build communities. You have a voice, but so does your audience. 
            Create connections with your users as you engage in genuine discussion.
            </p>
            <button>
                Started For Free
            </button>
           </div>
           <div className="mockup">
            <img src={MOCKUP} alt="" />
           </div>
          </div>
       </div>
    )
}

export default BuildTheCommunity