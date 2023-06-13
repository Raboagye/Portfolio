import React from 'react'
import rich from "../assets/edf.png"
import {AiFillGithub, AiFillLinkedin, AiFillFacebook} from "react-icons/Ai"
import {BsInstagram} from "react-icons/Bs"



const LeftSideBar = () => {
  return (
    <div className='flex-[0.2] w-full h-[calc(100vh-58px)] bg-gray-700 sticky top-[58px]'>
        <h1 className='text-white text-[1.6rem] tracking-widest font-body pt-8'>RICHARD ABOAGYE</h1>
        <img src={rich} className='w-[90%] mx-auto my-10'  alt="" />
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
  )
}

export default LeftSideBar