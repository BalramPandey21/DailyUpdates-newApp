import React from "react";
import Styles from './BookingForm'

export default function BookingForm() {
  const BookingFormSubmitHander=(event)=>{
    event.preventDefault();


    const formData={
      id:Math.random().toString(),
      gustName:"Balram"
    }
console.log(formData)

  }
  return (

    <form className={Styles["BookingForm-fullPage"]} onSubmit={BookingFormSubmitHander}>
      <div>
        <h6>Date And Time</h6>
        <button>+Add Rooms</button>
      </div>
      <div>
        <p>Gust's Full Name</p>
        <input type="text"></input>
      </div>
      <div>
        <div>
          <div>
            <p>Check-In-Date</p>
            <input type="Date" />
          </div>
          <div>
            <p>Check-Out-Date</p>
            <input type="Date" />
          </div>
        </div>
      </div>
      <div>
        <p>No. Of Person</p>
        <div>
          <input type="number" placeholder="Adults" />
          <input type="number" placeholder="Childers" />
        </div>
      </div>
      <div>
       
        <button type="submit">Next&rarr;</button>
      </div>
    </form>

  );
}
