import React from "react"
import './section1.css'
import FLOW from '../images/illustration-flowing-conversation.svg'

function flowingConversation(){
    return(
      <div className="flowconversation">
        <div className="flow">
            <img src={FLOW} alt="" />
        </div>
        <div className="conversation">
          <h1>flowing conversations</h1>
          <p>
            You wouldn't paginate a conversation in real life,
            so why do online? Our threads have just-in-time loading for a more natural flow.
          </p>
        </div>
      </div>
    )
}
export default flowingConversation