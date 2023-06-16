import React from 'react'

const Project = () => {
  return (
    <div className='container flex-[0.9] lg:flex-[0.65] w-full h-[100vh] relative perspective-1000 mt-16 flex flex-col items-center md:items-start md:pl-16 lg:pl-0'>
          <div className='group w-[350px] h-[350px] md:w-[400px] md:h-[400px] flex justify-center md:justify-start'>
              <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] transform-style-3d moveAnimate group mt-20'>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute translate-z-[62.5px]  md:translate-z-[125px]  hover:bg-[#009D66] opacity-90 group-hover:translate-z-[125px] md:group-hover:translate-z-[250px]  duration-200 ease-in'>Front</div>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute translate-z-[-62.5px]  md:translate-z-[-125px]  hover:bg-[#009D66] opacity-90  group-hover:translate-z-[-125px] md:group-hover:translate-z-[-250px]  duration-200 ease-in'>Back</div>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute right-[62.5px] md:right-[125px]  hover:bg-[#009D66] opacity-90 group-hover:right-[125px] md:group-hover:right-[250px]   rotate-y-[90deg]  duration-200 ease-in'>Left</div>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute left-[62.5px] md:left-[125px]  hover:bg-[#009D66] opacity-90 group-hover:left-[125px] md:group-hover:left-[250px]  rotate-y-[-90deg]  duration-200 ease-in'>Right</div>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute bottom-[62.5px] md:bottom-[125px]  hover:bg-[#009D66] opacity-90 group-hover:bottom-[125px] md:group-hover:bottom-[250px]  rotate-x-[90deg] duration-200 ease-in'>Top</div>
                  <div className='w-[125px] h-[125px] md:w-[250px]  md:h-[250px] text-center py-[50px] md:py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute top-[62.5px] md:top-[125px]  hover:bg-[#009D66] opacity-90 group-hover:top-[125px] md:group-hover:top-[250px]  rotate-x-[-90deg] duration-200 ease-in'>Bottom</div>
              </div>

          </div>
          <div className='w-[80%] md:w-[43%]  mt-16 flex flex-col items-center md:absolute md:right-0 pt-4 md:mt-96'>
              <p className='text-[20px] text-white text-center pt-8 font-body text-sm md:text-sm lg:text-[1rem]'>Musix: A Music App</p>
              <div>
                  <p className='text-gray-500 pt-8 font-body text-sm md:text-sm lg:text-[1rem]'>• Fully functional music app just like a MERN stack web app</p>
                  <p className='text-gray-500 pt-4 font-body text-sm md:text-sm lg:text-[1rem]'>• Populated with</p>
                  <p className='pt-4 font-body text-[#009D66] text-sm md:text-sm lg:text-[1rem]'>React Tailwind Redux Firebase</p>
              </div>


          </div>

    </div>
  )
}

export default Project