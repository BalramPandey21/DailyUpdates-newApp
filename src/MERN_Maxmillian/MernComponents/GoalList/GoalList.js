import React from "react";
import "../../MernApp.css";

export default function GoalList(props){
    return(
        <div className="GoalsList-fullpage">
            {props.goals.map((goals)=>{
                return(<li key={goals.id}>{goals.text}</li>)
            })}

        </div>
    )
}