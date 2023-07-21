import React,{useState} from 'react'
import NewGoals from './MernComponents/NewGoals/NewGoals';
import GoalList from './MernComponents/GoalList/GoalList';
import "./MernApp.css"

export default function MernApp() {

  const[courseGoals,setCourseGoals]=useState([]
);
  const addNewgoalHandler=(newGoals)=>{
    setCourseGoals(courseGoals.concat(newGoals))
    // courseGoals.push(newGoals);
    // console.log(courseGoals);

  }
  return (
    <div>
      <NewGoals onAddGoal={addNewgoalHandler}/>
      <GoalList goals={courseGoals}/>
      </div>
  )
}


