import React from 'react'

const ProjectOption2 = () => {
  return (
    <div className='container flex-[0.7] lg:flex-[0.65] w-full bg-gray-700 dark:bg-black flex flex-col h-[100vh] relative perspective-1000 mt-16 z-[10]'>
          <div className='group w-[400px] h-[400px] absolute right-[-60px] '>
              <div className='w-[250px] justify-center items-center h-[250px] transform-style-3d moveAnimate group'>
                  <div className='w-[250px] h-[250px] text-center py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute  translate-z-[125px]  hover:bg-[#009D66] opacity-90 group-hover:translate-z-[250px]  duration-200 ease-in'>Front</div>
                  <div className='w-[250px] h-[250px] text-center py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute  translate-z-[-125px]  hover:bg-[#009D66] opacity-90 group-hover:translate-z-[-250px]  duration-200 ease-in'>Back</div>
                  <div className='w-[250px] h-[250px] text-center py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute right-[125px]  hover:bg-[#009D66] opacity-90 group-hover:right-[250px]   rotate-y-[90deg]  duration-200 ease-in'>Left</div>
                  <div className='w-[250px] h-[250px] text-center py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute left-[125px]  hover:bg-[#009D66] opacity-90 group-hover:left-[250px]  rotate-y-[-90deg]  duration-200 ease-in'>Right</div>
                  <div className='w-[250px] h-[250px] text-center py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute bottom-[125px]  hover:bg-[#009D66] opacity-90 group-hover:bottom-[250px]  rotate-x-[90deg] duration-200 ease-in'>Top</div>
                  <div className='w-[250px] h-[250px] text-center py-[100px] text-white bg-black border-[2px] border-white text-[32px] box-border absolute top-[125px]  hover:bg-[#009D66] opacity-90 group-hover:top-[250px]  rotate-x-[-90deg] duration-200 ease-in'>Bottom</div>
              </div>

          </div>
          <div className='w-[43%] flex flex-col  absolute left-8 py-4 mt-96'>
              <p className='text-[20px] text-white text-center pt-8 font-body'>Musix: A Music App</p>
              <div>
                  <p className='text-gray-500 pt-8 font-body'>• Fully functional music app just like a MERN stack web app</p>
                  <p className='text-gray-500 pt-4 font-body'>• Populated with</p>
                  <p className='pt-4 font-body text-[#009D66] '>React Tailwind Redux Firebase</p>
              </div>


          </div>

    </div>
  )
}

export default ProjectOption2