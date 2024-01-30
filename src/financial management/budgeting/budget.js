import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext.js";

export default function Budget() {
  const { budget } = useContext(AppContext);
  console.log(budget)
  return (
    <div className="alert alert-secondary">
      <span>
        budget : ${budget}
      </span>
    </div>
  );
}
