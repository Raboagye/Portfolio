import React, { useState } from 'react'
import logo from "../assets/logo.svg"
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/Ai'
import rich from "../assets/edf.png"


const Navbar = ({sideMenu, changeTheme}) => {
    const [showNav, setShowNav] = useState(false)
    const [closeIcon, setCloseIcon] = useState(false)
    const [changeShadow, setChangeShadow] = useState(false)


    const handleNav = () => {
        setShowNav(!showNav)
        setCloseIcon(!closeIcon)
    }

    const handleShadow = () => {
        setChangeShadow(!changeShadow)
        changeTheme()
        
    }
    

  return (
    <>
        <nav className='py-4 ralative flex sticky top-0 bg-gray-700 shadow-md shadow-gray-950 w-full z-[999] px-4 items-center h-[58px] dark:bg-black transition-all duration-500'>
         <img src={logo} alt="" className='sticky top-0 min-w-[60px] w-[5%] max-h-[36px] object-contain cursor-pointer' />
         <img src={rich} className='w-[30px] h-[30px] ml-4 object-contain cursor-pointer rounded-full mid:hidden ' alt='avatar' onClick={sideMenu}/>
         <div className='hidden absolute left-[52.5%] transform translate-x-[-50%] gap-[3vw] justify-center items-center lg:flex'>
              <div className='bg-[#009D66] inner-shadow  border-t-[1px]  border-[#009D66] rounded-md py-0 px-4 '>
                  <a className='text-white text-center'>
                      Home
                  </a>
              </div>
              <div className='inner-shadow bg-gray-400 border-t-[1px] border-gray-500 rounded-md py-0 px-4 '>
                  <a className='text-gray-400'>
                      About
                  </a>
              </div>
              <div className='inner-shadow bg-gray-400 border-t-[1px] border-gray-500 rounded-md py-0 px-4 '>
                  <a className='text-gray-400'>
                      Skills
                  </a>
              </div>
              <div className='inner-shadow bg-gray-400 border-t-[1px] border-gray-500 rounded-md py-0 px-4 '>
                  <a className='text-gray-400'>
                      Projects
                  </a>
              </div>
              <div className='inner-shadow bg-gray-400 border-t-[1px] border-gray-500 rounded-md py-0 px-4 '>
                  <a className='text-gray-400'>
                      Contact
                      </a>
                  </div>

              </div>

              <label for='check' className={`max-w-[50px] min-w-[45px] w-[5%] h-5 bg-gray-400 rounded-2xl absolute top-[50%]  translate-y-[-50%] right-16 lg:right-4 ${changeShadow ? 'box-inner-shadow' : "dark-shadow"} cursor-pointer transition-all duration-500`}>
                  <input type='checkbox' id='check' className='sr-only peer' onClick={handleShadow} />
                  <span className='w-[1vw] h-[1vw] min-w-[18px] min-h-[18px] bg-black left-[1px] absolute rounded-full mid:box-shadow  top-[50%] translate-y-[-50%] peer-checked:bg-[#009D66] lg:peer-checked:left-[63%] md:peer-checked:left-[62%] transition-all duration-500 peer-checked:left-[57%]'></span>
              </label>


              <div className='absolute right-4 text-white cursor-pointer shadow-lg' onClick={handleNav} >
                  {
                      showNav ? <AiOutlineClose className='text-lg lg:hidden' /> : <AiOutlineMenu className='text-lg lg:hidden' />
                  }
              </div>
              {
                  showNav && (
                      <div className='absolute w-[20%] min-w-[130px] bg-gray-700 rounded-lg top-[58px] right-0 z-[999] flex flex-col gap-[3px] lg:hidden dark:bg-black transition-all duration-500'  >
                          <div className=' bg-gray-400 inner-shadow  border-t-[1px] text-center rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer  group' >
                              <a className='text-gray-400 group-hover:text-white text-center'>
                                  Home
                              </a>
                          </div>
                          <div className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
                              <a className='text-gray-400 group-hover:text-white'>
                                  About
                              </a>
                          </div>
                          <div className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
                              <a className='text-gray-400 group-hover:text-white'>
                                  Skills
                              </a>
                          </div>
                          <div className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
                              <a className='text-gray-400 group-hover:text-white'>
                                  Projects
                              </a>
                          </div>
                          <div className='inner-shadow bg-gray-400 border-t-[1px] text-center border-gray-500 rounded-md py-0 px-4 hover:bg-[#009D66] hover:border-[#009D66] cursor-pointer group'>
                              <a className='text-gray-400 group-hover:text-white'>
                                  Contact
                              </a>
                          </div>
                          
                         
                      </div>
                      
                  )
         }
         
      </nav>
          
    </>
      
  )
}

export default Navbar







