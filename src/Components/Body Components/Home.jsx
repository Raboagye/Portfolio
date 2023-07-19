import React, { useEffect, useRef } from 'react'
import object1 from "../../assets/3d1.png"
import object2 from "../../assets/3dbook.png"
import object3 from "../../assets/3dservices.png"
import object4 from "../../assets/3dweb.png"
import { motion, useInView, useAnimation, delay } from 'framer-motion'

const Home = ({HandleHome, activeScroll}) => {

      const ref= useRef(null)
      const isInView = useInView(ref, {amount: 0.5})
      
      useEffect(()=>{
        if (isInView && !activeScroll){
          HandleHome()
        }
           
      }, [isInView])
    
      const header3 = {
        hidden: {
          y: [0,-120,0],
          transition: { duration: 0.05, },
          opacity:0,
        },
        visible: {
          y:[0,-120,0],
          transition: {
            duration: 1.3, 
          },
          opacity:1,
        }
      }
      const header2 = {
        hidden: {
          y: -200,
          transition: { duration: 0.05, },
          opacity:0,
        },
        visible: {
          y:0,
          transition: {
            duration: 1.2
          },
          opacity:1,
        }
      }
      const header4 = {
        hidden: {
          opacity:0,
          y: 200,
          transition: { duration: 0.05, }
        },
        visible: {
          opacity:1,
          y:0,
          transition: {
            duration: 0.8
          }
        }
      }

      const homeAnimation={
            hidden: { opacity: 0, y: -75 },
            visible: { opacity: 1, y: 0, 
                transition:{ duration: 0.75, delay: 0.25 }
            },
            
      }



    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.1 }}
            viewport={{once:false, amount: 0.3}}
            variants={homeAnimation}
            ref={ref}
            id='home' className='flex-[1] md:flex-[0.9] mid:flex-[0.65] w-full bg-gray-700 flex flex-col items-center dark:bg-black '>

            <div className='flex-[0.9] mid:flex-[0.65] w-full bg-gray-700 flex flex-col items-center dark:bg-black transition-all duration-500'>
                <motion.p variants={header3} initial="hidden"
                    whileInView="visible" className='text-[30px] small:text-[36px] break-words w-[80%] text-white text-center pt-20 font-body '>Welcome Aboard! I Am </motion.p>
                <motion.p variants={header3} initial="hidden"
                    whileInView="visible" className='text-[30px] small:text-[36px] w-[70%] text-[#009D66] text-center break-words pt-4 font-body '>Richard<span className='text-white'>,</span></motion.p>
                <motion.div transition={{ staggerChildren: 0.8 }} initial="hidden"
                    whileInView="visible" viewport={{ once: false, amount: 0.6 }} className='text-sm w-[80%] md:text-sm lg:text-[1rem] text-gray-500 text-center pt-16 font-body leading-8'><motion.p className='leading-8' variants={header2}>A frontend enthusiast on a mission to banish the mundane</motion.p><motion.p className='leading-8' variants={header2}>and bring excitement to the Coding realm.</motion.p></motion.div>
                <motion.div transition={{ staggerChildren: 0.5 }} initial="hidden"
                    whileInView="visible" viewport={{ once: false, amount: 0.6 }} className='text-sm md:text-sm lg:text-[1rem] text-gray-500 text-center pt-16 font-body leading-8 mt-4 w-[80%] '><motion.p className='leading-8' variants={header4}>Coding boring stuff? Not on my watch! Immerse</motion.p> <motion.p className='leading-8' variants={header4}>yourself in my frontend projects and witness the</motion.p ><motion.p className='leading-8' variants={header4}>power of code come to life.</motion.p></motion.div>
                <div className='w-[80%] small:w-[75%] mid:w-[70%] m-auto relative h-[45vh] my-20'>
                    <img src={object1} className='w-[20%] mid:w-[15%]  absolute top-[5%] left-[50%] object-contain transform translate-x-[-50%]' alt="" />
                    <img src={object2} className='w-[30%] mid:w-[25%] absolute top-[30%] left-[-2.5%] object-contain' alt="" />
                    <img src={object3} className='w-[30%] mid:w-[25%] absolute top-[40%] right-[0%] object-contain' alt="" />
                    <img src={object4} className='w-[20%] mid:w-[15%]  absolute top-[70%] left-[50%] object-contain transform translate-x-[-50%]' alt="" />
                </div>
            </div>



        </motion.div>
    )
}

export default Home