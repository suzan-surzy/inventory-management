import React from "react"
import './section.css'
import GROW from '../images/illustration-grow-together.svg'

function growTogether(){
   return(
    <div className="growtogether">
        <div className="together">
            <h1>Grow Together</h1>
            <p>
            Generate meaningful discussions with your audience and build a strong,
            loyal Community.Think of the insightful conversations you miss out on with a feedback form.
            </p>
        </div>
        <div className="grow">
            <img src={GROW} alt="" />
        </div>
    </div>
   )
}
export default growTogether