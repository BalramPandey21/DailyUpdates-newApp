import React from "react";
export default function UsersList(props){
    
    return(
        <div>
            {(props.users.map((users)=>{
                return(<li key={users.id}>{users.Name}</li>
                )}))}
           
        </div>
    )
}