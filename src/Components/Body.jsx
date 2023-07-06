import React, { useEffect, useRef } from 'react'
import Home from './Body Components/Home'
import AboutMe from './Body Components/AboutMe'
import Skills from './Body Components/Skills'
import Contact from './Body Components/Contact'
import Works from './Body Components/Works'
import { motion, useInView, useAnimation } from 'framer-motion'


const Body = () => {
  // const ref = useRef(null)
  // const isInView = useInView(ref, {once: true})
  // const mainControls = useAnimation()

  // useEffect(()=> {
  //   mainControls.start("visible")
    
  // }, [isInView])

  return (
    <div
    // ref={ref} 
    // variants={{
    //   hidden: {opacity: 0, y: -75},
    //   visible: {opacity: 1, y: 0}
    // }}
    // initial="hidden"
    // animate={mainControls}
    // transition={{duration: .75, delay: 0.25}}
    className='rounded-2xl flex-[1] lg:flex-[0.65]'>
      <Home />
      <AboutMe/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>

  )
}

export default Body