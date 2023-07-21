// import React from 'react'
// import MernApp from './MERN_Maxmillian/MernApp'
// import NewsMonkey from "./NewsMonkey/Newsmonkey"
// import MyPrecticeApp from "./MyPrectice-App/MyPrecticeApp"
// import User from './User'
// import UsersList from './UsersList'
// import PramotionalImageCard from './test-sec-app/PramotionalImageCard'
// import "./App.css"

// export default function App(props) {


//   const newUserHandler=(newUser)=>{
//     usersListItems.push(newUser)
//     console.log(usersListItems)

    
//   }
//   const usersListItems=[{id:"us1",Name:"Balram Pandey"}]
//   return (
//     <div className='app-full-page'>
//       <MernApp/>
//       {/* <NewsMonkey/> */}
//       <MyPrecticeApp/>
//       {/* Adduser={newUser} */}

//       <User onAdduser={newUserHandler} />
//       <UsersList users={usersListItems}/>
//       <PramotionalImageCard/>
      
//     </div>
//   )
// }


import React from 'react'
import Newsmonkey from './NewsMonkey/Newsmonkey'
export default function App() {
  return (
    <div>
      <Newsmonkey/>
      
    </div>
  )
}







