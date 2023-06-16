import './App.css'
import Navbar from './Components/Navbar'
import LeftSideBar from './Components/LeftSideBar'
import Body from './Components/Body'
import RightSideBar from './Components/RightSideBar'
import ToggleSideBar from './Components/ToggleSideBar'
import { useState } from 'react'


function App() {

  const [openSideMenu, setOpenSideMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode?'dark': ""}>
       <div className='bg-gray-700 dark:bg-black transition-all duration-500'>
      <div className='w-[94%] m-auto'>
        <Navbar sideMenu={()=>setOpenSideMenu(!openSideMenu)} changeTheme={()=>setDarkMode(!darkMode)}/>
        <div className=''>
          <ToggleSideBar closeProfile={() => setOpenSideMenu(false)} openProfile={openSideMenu}/>
        </div>
        <div className='flex'>
          <LeftSideBar/>
          <Body/>
          <RightSideBar/>
        </div>
      </div>
    </div>
      {console.log(darkMode)}
    </div>
   
  )
}

export default App
