import React from 'react'
import Home from './Body Components/Home'
import AboutMe from './Body Components/AboutMe'
import Skills from './Body Components/Skills'
import Contact from './Body Components/Contact'
import Works from './Body Components/Works'


const Body = () => {
  return (
    <div className='rounded-2xl flex-[1] lg:flex-[0.65]'>
      <Home />
      <AboutMe/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>

  )
}

export default Body