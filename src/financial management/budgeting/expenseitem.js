import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext.js";
// import {IconContext} from 'react-icons'

export default function ExpenseItem(props){
  const {dispatch} = useContext(AppContext)
  const handleDeleteExpense = () =>{
    dispatch({
      type:'DELETE_EXPENSE',
      payload: props.id,
    })
  }
   return(
     <li className="list-group-item d-flex justify-content-between align-items-center">
       {props.name}
       <div>
         <span className="badge badge-primary badge-pill mr-3">
            ${props.cost}
         </span>
         <button size='1.5em' onClick = {handleDeleteExpense} ></button>
       </div>
     </li>
   )
}