import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'

export default function Newsmonkey() {
  return (
    <div>
        <Navbar/>
        <News pageSize={5}/>
      
    </div>
  )
}
