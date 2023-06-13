import React from 'react'
import {AiFillFacebook, AiFillGithub, AiFillHome, AiFillLinkedin} from "react-icons/Ai"
import { BsInstagram, BsInfo} from 'react-icons/Bs'

const RightSideBar = () => {
  return (
    <div className='flex-[0.15] w-full bg-gray-700 h-[calc(100vh-58px)] sticky top-[58px]'>
          <div className='flex flex-col absolute right-4 gap-4  py-5 rounded-full mt-39'>
              <div className='p-2 border bg-[#009D66] border-[#1F2023] rounded-full button-inner-shadow '>
                  <AiFillHome className='text-white text-sm' />
              </div>
              <div className='p-2 border border-[#1F2023] rounded-full button-inner-shadow bg-gray-500'>
                  <BsInfo className='text-gray-500 text-sm' />
              </div>
              <div className='p-2 border border-[#1F2023] rounded-full button-inner-shadow bg-gray-500'>
                  <AiFillHome className='text-gray-500 text-sm' />
              </div>
              <div className='p-2 border border-[#1F2023] rounded-full button-inner-shadow bg-gray-500'>
                  <AiFillHome className='text-gray-500 text-sm' />
              </div>
              <div className='p-2 border border-[#1F2023] rounded-full button-inner-shadow bg-gray-500 '>
                  <AiFillHome className='text-gray-500 text-sm' />
              </div>
          </div>
          <div className='flex flex-col items-center absolute bottom-4 left-[50%] transform translate-x-[-50%] w-full'>
            <p className='font-body text-gray-500'>Crafting Frontend Excellence</p>
            <div className='flex items-center justify-center gap-4 w-full'>
                <div className='w-[25%] border h-0 border-t-gray-500'></div>
                <p className='font-body text-[#009D66]'>where</p>
                <div className='w-[25%] border h-0 border-t-gray-500'></div>
            </div>
            <p className='font-body text-gray-500'>Quality Takes Lead</p>
          </div>
      </div>
  )
}

export default RightSideBar