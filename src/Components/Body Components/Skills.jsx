import React from 'react'
import frame24 from "../../assets/skills/Frame 24.png"
import frame11 from "../../assets/skills/Frame 11.png"
import frame23 from "../../assets/skills/Frame 23.png"
import frame14 from "../../assets/skills/Frame 14.png"
import frame15 from "../../assets/skills/Frame 15.png"
import frame16 from "../../assets/skills/Frame 16.png"
import frame17 from "../../assets/skills/Frame 17.png"
import frame18 from "../../assets/skills/Frame 18.png"
import frame20 from "../../assets/skills/Frame 20.png"
import frame21 from "../../assets/skills/Frame 21.png"
import frame22 from "../../assets/skills/Frame 22.png"
import frame25 from "../../assets/skills/Frame 25.png"
import frame26 from "../../assets/skills/Frame 26.png"
import frame27 from "../../assets/skills/Frame 27.png"
import frame28 from "../../assets/skills/Frame 28.png"
import group15 from "../../assets/skills/Group 15.png"




const Skills = () => {
  return (
    <div className='flex-[0.9] lg:flex-[0.65] flex flex-col items-center w-full bg-gray-700 my-32 dark:bg-black transition-all duration-500'>
         <p className='text-[36px] text-white text-center pt-16 font-body text-transform capitalize'>Tech & <span className='text-[#009D66]'>Tools</span> </p>
         <p className='text-[20px] text-gray-500 w-[80%] text-center pt-6 pb-24 font-body leading-8 text-transform capitalize'>i have been working with recently</p>
         <div className='w-[60%] m-auto pt-24 relative h-[70vh]'>
            <img src={frame24} alt="" className='w-[10%] top-[-5vh] absolute left-[-14%] object-contain' />
            <img src={frame18} alt="" className='w-[10%] top-[51vh] absolute left-[-20%] object-contain' />
            <img src={frame23} alt="" className='w-[10%] top-[0vh] absolute left-[25%] object-contain' />
            <img src={frame20} alt="" className='w-[10%] top-[55vh] absolute left-[25%] object-contain' />
            <img src={frame11} alt="" className='w-[10%] top-[-3vh] absolute left-[65%] object-contain' />
            <img src={frame14} alt="" className='w-[10%] top-[-5vh] absolute left-[104%] object-contain' />
            <img src={frame15} alt="" className='w-[10%] absolute top-[17vh] left-[-15%] object-contain' />
            <img src={frame16} alt="" className='w-[10%] absolute top-[17vh] left-[27%] object-contain' />
            <img src={frame17} alt="" className='w-[10%] absolute top-[17vh] left-[67%] object-contain' />
            <img src={frame25} alt="" className='w-[10%] absolute top-[17vh] left-[100%] object-contain' />
            <img src={frame21} alt="" className='w-[10%] absolute top-[54vh] left-[63%] object-contain' />
            <img src={frame22} alt="" className='w-[10%] absolute top-[38vh] left-[104%] object-contain' />
            <img src={frame26} alt="" className='w-[10%] absolute top-[34vh] left-[-25%]object-contain' />
            <img src={frame27} alt="" className='w-[10%] absolute top-[34vh] left-[35%] object-contain' />
            <img src={frame28} alt="" className='w-[10%] absolute top-[34vh] left-[70%] object-contain' />
            <img src={group15} alt="" className='w-[10%] absolute top-[54vh] left-[103%] object-contain' />
         </div>
    </div>
  )
}

export default Skills