import React from 'react'
import Project from './Projects/Project'
import ProjectOption2 from './Projects/ProjectOption2'

const Works = () => {
  return (
    <>
    <div className='container transition-all duration-500 flex-[0.9] lg:flex-[0.65] w-full bg-gray-700 flex flex-col my-16 items-center dark:bg-black'>
        <p className='text-[36px] text-white text-center pt-8 font-body w-[80%] '>Recent Projects</p>
    </div>
        <Project/>
        {/* <ProjectOption2/> */}
        <Project/>
        {/* <ProjectOption2/> */}
    </>
  )
}

export default Works