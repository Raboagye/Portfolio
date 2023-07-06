import React from 'react'
import {AiFillFacebook, AiFillGithub, AiFillHome, AiFillLinkedin} from "react-icons/Ai"
import { BsInstagram, BsInfo} from 'react-icons/Bs'
import { motion } from 'framer-motion'

const RightSideBar = () => {

    const header2 = {
        initial: {
            y: -60,
            opacity: 0,
            transition: {duration: 0.05,}
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.3,
            }
        }
    }
    const stagger2 = {
        animate: {
            transition: {
                delayChildren: 0.01,
                staggerChildren: 0.2,
                staggerDirection: 1
            }
        }
    }

  return (
    <motion.div animate="animate" initial="initial" className='fixed hidden md:block bg-green-400 md:flex-[0.1] w-[10%] md:w-full right-4 md:bg-gray-700 h-[calc(100vh-58px)] transition-all duration-500 md:sticky top-[58px] lg:flex-[0.15] dark:bg-black'>
          <motion.div variants={stagger2} className='flex flex-col absolute right-4 gap-4  py-5 rounded-full mt-39'>
              <motion.div variants={header2} className='p-2 border bg-[#009D66] border-[#1F2023] rounded-full button-inner-shadow '>
                  <AiFillHome className='text-white fontSize lg:text-sm' />
              </motion.div>
              <motion.div variants={header2} className='p-2 border border-[#1F2023] rounded-full button-inner-shadow bg-gray-500'>
                  <BsInfo className='text-gray-500  fontSize lg:text-sm' />
              </motion.div>
              <motion.div variants={header2} className='p-2 border border-[#1F2023] rounded-full button-inner-shadow bg-gray-500'>
                  <AiFillHome className='text-gray-500 fontSize lg:text-sm' />
              </motion.div>
              <motion.div variants={header2} className='p-2 border border-[#1F2023] rounded-full button-inner-shadow bg-gray-500'>
                  <AiFillHome className='text-gray-500 fontSize lg:text-sm' />
              </motion.div>
              <motion.div variants={header2} className='p-2 border border-[#1F2023] rounded-full button-inner-shadow bg-gray-500 '>
                  <AiFillHome className='text-gray-500 fontSize lg:text-sm' />
              </motion.div>
          </motion.div>
          <div className='hidden flex-col items-center absolute bottom-4 left-[50%] transform translate-x-[-50%] w-full lg:flex'>
            <p className='font-body text-gray-500 fontSize'>Crafting Frontend Excellence</p>
            <div className='flex items-center justify-center gap-4 w-full'>
                <div className='w-[25%] border h-0 border-t-gray-500'></div>
                <p className='font-body text-[#009D66] fontSize'>where</p>
                <div className='w-[25%] border h-0 border-t-gray-500'></div>
            </div>
            <p className='font-body text-gray-500 fontSize'>Quality Takes Lead</p>
          </div>
      </motion.div>
  )
}

export default RightSideBar