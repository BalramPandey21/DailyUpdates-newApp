import React from "react";
// import "./MyPrecticeApp.css";
import BookingForm from "./PComponents/BookingForm";
import BookingConformForm from "./PComponents/BookingConformForm";

export default function MyPrecticeApp() {
  const userData = [
    {
      id: "gn1",
      gustName: "Balram Pandey",
      CinDate: "07-07-2023",
      CoutDate: "08-07-2023",
      NofAdult: "02",
      NofChild: "00",
    }
  ];

  return (
    <div className="MyPrecticeApp-fullpage">
      <BookingForm />
      <BookingConformForm data={userData} />
    </div>
  );
}
