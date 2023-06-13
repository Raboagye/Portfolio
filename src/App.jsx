import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import LeftSideBar from './Components/LeftSideBar'
import Body from './Components/Body'
import RightSideBar from './Components/RightSideBar'

function App() {

  return (
    <div className='bg-gray-700'>
      <div className='w-[94%] m-auto'>
        <Navbar/>
        <div className='flex'>
          <LeftSideBar/>
          <Body/>
          <RightSideBar/>
        </div>
      </div>
    </div>
  )
}

export default App
