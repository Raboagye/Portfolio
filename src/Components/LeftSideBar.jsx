import React from 'react'
import rich from "../assets/edf.png"
import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from "react-icons/Ai"
import {BsInstagram} from "react-icons/Bs"



const LeftSideBar = () => {
  return (
    <div className='hidden mid:block flex-[0.25] w-full h-[calc(100vh-58px)] bg-gray-700 sticky top-[58px] box-border lg:flex-[0.2] max-h-[690px] transition-all duration-500 dark:bg-black'>
      <h1 className='text-white text-justify tracking-widest md:text-[18px] lg:text-[20px] sm:text-[20px] font-body pt-8 pl-4'>RICHARD ABOAGYE</h1>
      <div className='flex-[0.2] w-full h-[calc(100vh-58px)] bg-transparent sticky top-[58px] px-4'>
        <img src={rich} className='w-full object-contain mx-auto my-10'  alt="" />
        <p className='text-gray-500 font-body text-center'>Front-end Engineer</p>
        <p className='text-gray-500 font-body text-center mt-4'>www.richyaboagye@gmail.com</p>
        <p className='text-gray-500 font-body text-center mt-10'>© 2023 Richard, All Rights Reserved</p>
        <div className='flex gap-8 w-full justify-center my-10'>
            <AiFillGithub className='text-white text-xl'/>
            <AiFillLinkedin className='text-white text-xl'/>
            <AiFillFacebook className='text-white text-xl'/>
            <BsInstagram className='text-white text-xl'/>
        </div>
        <button className='text-white font-body tracking-widest text-center w-full bg-black py-4 contact-inner-shadow'>CONTACT ME</button>
    </div>

    </div>
    
  )
}

export default LeftSideBar