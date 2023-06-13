import React from 'react'
import Home from './Body Components/Home'
import AboutMe from './Body Components/AboutMe'
import Skills from './Body Components/Skills'
import Contact from './Body Components/Contact'
import Works from './Body Components/Works'


const Body = () => {
  return (
    <div className='flex-[0.65] rounded-2xl'>
      <Home />
      <AboutMe/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>

  )
}

export default Body