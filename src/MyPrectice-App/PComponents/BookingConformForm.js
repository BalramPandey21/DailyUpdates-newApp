import React from "react";
import Styles from './BookingConformForm.module.css'


export default function BookingConformForm(props){
 console.log(props.data)
    return(
    <div className={Styles["BookingConformForm-fullpage"]}>
        {props.data.map((data)=>{
            return(
                <div >
                    <div>
                    <p >Gust Name :{data.gustName}</p>
                    <p>Chech-in-Date :{data.CinDate}</p>
                    <p>Check-out-Date:{data.CoutDate}</p>
                    <p>No. of Adult:{data.NofAdult}</p>
                    <p>No. of child:{data.NofChild}</p>
                    </div>
                    <div>
                        <button>Book</button>
                    </div>

                </div>
            )
            
        })}
       

    </div>
    )
}