import React from 'react'
import object1 from "../../assets/3d1.png"
import object2 from "../../assets/3dbook.png"
import object3 from "../../assets/3dservices.png"
import object4 from "../../assets/3dweb.png"

const Home = () => {
    return (
            <div className='flex-[0.9] mid:flex-[0.65] w-full bg-gray-700 flex flex-col items-center dark:bg-black transition-all duration-500'>
                <p className='text-[36px] w-[80%] text-white text-center pt-8 font-body '>Welcome Aboard! I Am </p>
                <p className='text-[36px] w-[80%] text-[#009D66] text-center pt-4 font-body '>Richard<span className='text-white'>,</span></p>
                <p className='text-sm w-[80%] md:text-sm lg:text-[1rem] text-gray-500 text-center pt-16 font-body leading-8'>A frontend enthusiast on a mission to banish the mundane <br />and bring excitement to the Coding realm.</p>
                <p className='text-sm md:text-sm lg:text-[1rem] text-gray-500 text-center pt-16 font-body leading-8 mt-4 '>Coding boring stuff? Not on my watch! Immerse <br /> yourself in my frontend projects and witness the <br /> power of code come to life.</p>
                <div className='w-[80%] small:w-[75%] mid:w-[70%] m-auto relative h-[45vh] my-20'>
                    <img src={object1} className='w-[20%] mid:w-[15%] absolute top-[5%] left-[50%] object-contain transform translate-x-[-50%]' alt="" />
                    <img src={object2} className='w-[30%] mid:w-[25%] absolute top-[30%] left-[-2.5%] object-contain' alt="" />
                    <img src={object3} className='w-[30%] mid:w-[25%] absolute top-[40%] right-[0%] object-contain' alt="" />
                    <img src={object4} className='w-[20%] mid:w-[15%]  absolute top-[70%] left-[50%] object-contain transform translate-x-[-50%]' alt="" />
                </div>
            </div>
    )
}

export default Home