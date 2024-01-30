import React from "react";
import './footer.css'
import FOOTERLOGO from '../images/logo.svg'
import LOCATION from '../images/icon-location.svg'
import PHONE from '../images/icon-phone.svg'
import EMAIL from '../images/icon-email.svg'


function lastpart(){
    return(
        <div>
            <div className="ready">
                <h2>Ready To Build your community?</h2>
                <button>Get For Free</button>
            </div>
            <div className="footer">
                <div className="footerimage">
                    <img src={FOOTERLOGO} alt="" />
                </div>
                <div className="join">
                    <div>
                    <div className="location">
                        <img src={LOCATION} alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, quaerat.</p>
                    </div>
                    <div className="phone">
                        <img src={PHONE} alt="" />
                        <p>0984746563524</p>
                    </div>
                    <div className="email">
                        <img src={EMAIL} alt="" />
                        <p>ogechi@.com</p>
                    </div>
                    </div>
                    <div className="about">
                    <p>About Us</p>
                    <p>What We Do</p>
                    <p>FAQ</p>
                    </div>
                    <div className="blog">
                    <p>Career</p>
                    <p>Blog</p>
                    <p>Contact Us</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default lastpart