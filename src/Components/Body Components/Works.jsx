import React from 'react'
import Project from './Projects/Project'
import ProjectOption2 from './Projects/ProjectOption2'
import { motion } from 'framer-motion'

const Works = ({HandleProject, activeScroll }) => {

  return (
    <>
    <div id='projects' className='container transition-all duration-500 flex-[0.9] lg:flex-[0.65] w-full bg-gray-700 flex flex-col my-16 items-center pt-12 dark:bg-black'>
        <p className='text-[36px] text-white text-center pt-8 font-body w-[80%] '>Recent Projects</p>
    </div>
        <Project HandleProject={HandleProject} activeScroll={activeScroll}/>
        {/* <ProjectOption2/> */}
        <Project HandleProject={HandleProject} activeScroll={activeScroll}/>
        {/* <ProjectOption2/> */}
    </>
  )
}

export default Works