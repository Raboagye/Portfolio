import React from 'react'

const AboutMe = () => {
  return (
    <div className='flex-[0.9] lg:flex-[0.65] w-full bg-gray-700 relative flex flex-col items-center dark:bg-black transition-all duration-500'>
      <p className='text-[36px] w-[80%] text-white text-center pt-16 mt-8 font-body text-transform capitalize'>every successful journey begins with </p>
      <p className='text-[36px] text-[#009D66] text-center pt-4 font-body '><span className='text-white'>A</span> Story<span className='text-white'>,</span></p>
      <p className='text-sm w-[80%] md:text-sm lg:text-[1rem] text-gray-500 text-center pt-16 font-body leading-8'>
        I'm Richard Aboagye, a Frontend Engineer with a Bachelor’s Degree in Mechanical<br />Engineering. I am a Ghanaian developer with extensive knowledge in React.js and <br /> current technologies.
        <br />
        <br />
        <br />
        I have a passion for creating seamless user experiences and take pride in designing my <br /> own mockups using Figma. With a solid foundation in engineering and expertise in <br />  frontend development, I am excited to bring my skills and enthusiasm to contribute as a <br />valuable member of your team.
      </p>
      <div className='w-full pt-20 mb-16'>
      <button className='bg-[#009D66] py-2 px-4 text-white font-body rounded-md download-inner-shadow border-[#009D66] absolute border-t-[1px] left-[50%] transform translate-x-[-50%] text-sm md:text-sm lg:text-[1rem]'>Download Cv</button>

      </div>

      

    </div>
  )
}

export default AboutMe