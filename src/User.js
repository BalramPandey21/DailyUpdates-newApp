import React from 'react';

export default function User(){
    const userInputHandler=(event)=>{
        let newuserdata=event.target.value;
      

    }
    const submitHandler=(event)=>{
        event.preventDefault();
        const newUser={
            id:Math.random().toString(),
            Name:"Balram"
        }
        // console.log(newUser)

    }


    return(
        <form onSubmit={submitHandler}>
            <input type='text' placeholder='Enter Here!!' onChange={userInputHandler}/>
            <button type='submit'>OK</button>
        </form>
    )
}