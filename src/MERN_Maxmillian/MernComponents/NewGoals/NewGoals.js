import React from "react";
import "../../MernApp.css";
export default function NewGoals(props) {
  let inputVariable;


  const formSubmitHandler = (event) => {
    event.preventDefault();

   
    const newGoals = {
      id: Math.random().toString(),
      text:inputVariable,
    };
    props.onAddGoal(newGoals);
  };
const inputHandler=event=>{
  inputVariable=event.target.value; 
}


  return (
    <form onSubmit={formSubmitHandler} className="newGoals-form">
      <input type="text" onChange={inputHandler}  />
      <button type="submit" className="newGoals-btn">
        Add Goals
      </button>
    </form>
  );
}
