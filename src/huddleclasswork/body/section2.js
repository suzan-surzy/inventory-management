import React from "react"
import './section2.css'
import USER from '../images/illustration-your-users.svg'

function yourUsers(){
    return(
        <div className="youruser">
            <div  className="your">
                <h1>Your Users</h1>
                <p>
                It takes no time at all to integrate Huddle with your app's authentication solution.
                THis means,once signed in to your app, your users can start chatting immediately.
                </p>
            </div>
            <div className="user">
                <img src={USER} alt="" />
            </div>
        </div>
    )
}
export default yourUsers