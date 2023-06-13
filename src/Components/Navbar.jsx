import React from 'react'
import logo from "../assets/logo.svg"

const Navbar = () => {
  return (
      <nav className='py-4 ralative flex sticky top-0 bg-gray-700 shadow-md shadow-gray-950 w-full z-[999]'>
         <img src={logo} alt="" className='sticky top-0' />
         <div className='absolute left-[52.25%] transform translate-x-[-50%] flex gap-10'>
              <div className='bg-[#009D66] inner-shadow  border-t-[1px] border-[#009D66] rounded-md py-0 px-4 '>
                  <a className='text-white text-sm  text-center'>
                      Home
                  </a>
              </div>
              <div className='inner-shadow bg-gray-400 border-t-[1px] border-gray-500 rounded-md py-0 px-4 '>
                  <a className='text-gray-400 text-sm'>
                      About
                  </a>
              </div>
              <div className='inner-shadow bg-gray-400 border-t-[1px] border-gray-500 rounded-md py-0 px-4 '>
                  <a className='text-gray-400 text-sm'>
                      Skills
                  </a>
              </div>
              <div className='inner-shadow bg-gray-400 border-t-[1px] border-gray-500 rounded-md py-0 px-4 '>
                  <a className='text-gray-400 text-sm'>
                      Projects
                  </a>
              </div>
              <div className='inner-shadow bg-gray-400 border-t-[1px] border-gray-500 rounded-md py-0 px-4 '>
                  <a className='text-gray-400 text-sm'>
                      Contact
                  </a>
              </div>
            
         </div>
          
      </nav>
  )
}

export default Navbar







