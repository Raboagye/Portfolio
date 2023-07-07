import React, { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Contact = ({HandleContact, activeScroll}) => {

      const ref= useRef(null)
      const isInView = useInView(ref, {amount: 0.5})


      useEffect(()=>{
        if (isInView && !activeScroll){
          HandleContact()
        }
           
      }, [isInView])

  return (
    <div ref={ref} id='contact' className='flex-[0.9] lg:flex-[0.65] w-full bg-gray-700 flex flex-col items-center my-16 dark:bg-black transition-all duration-500 pt-16 pb-16'>
      <div  className='flex flex-col items-center w-full'>

        <p className='text-[36px] text-white text-center pt-8 font-body '>Contact Richard</p>
        <form  className='w-full small:w-[80%] md:min-w-[470px] md:w-[60%] bg-black mt-8 p-8 flex flex-col items-center rounded-2xl'>
          <div className='w-full relative'>
            <input id='email-address' placeholder='richardaboagye100@gmail.com' type="email" required className='w-full  h-8 border-0 border-b border-[#94A3B8] peer outline-0 bg-transparent py-1 pr-3 text-gray-400  focus:border-[#009D66] placeholder-transparent' />
            <label for="email-address" className='absolute left-0 py-1 pr-3 -top-5  cursor-text text-gray-600  peer-focus:text-xs peer-focus:-top-5 ease-in-out text-xs peer-focus:text-[#009D66]  transition-all duration-300 uppercase peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm'>Email</label>
          </div>

          <div className='my-12 w-full relative'>
            <input placeholder='For your perusal' autoComplete='off' id='subject' type="text" required className='w-full h-8 border-0 border-b border-[#94A3B8]  peer outline-0 bg-transparent py-1 pr-3 text-gray-400 focus:border-[#009D66] placeholder-transparent' />
            <label for="subject" className='absolute left-0 py-1 pr-3 -top-5 cursor-text text-gray-600  peer-focus:text-xs peer-focus:-top-5  ease-in-out peer-focus:text-[#009D66] transition-all duration-300 uppercase  text-xs peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm'>Subject </label>

          </div>

          <div className='mb-12 w-full relative'>
            <textarea placeholder='this is the message' id='message' required className='w-full h-[150px] box-border resize-none border-0 border-b border-[#94A3B8]  peer outline-0 bg-transparent py-1 pr-3 text-gray-400 focus:border-[#009D66] placeholder-transparent' />
            <label for="message" className='absolute left-0 py-1 pr-3 text-xs cursor-text text-gray-600  peer-focus:text-xs peer-focus:-top-5  ease-in-out peer-focus:text-[#009D66] transition-all duration-300 -top-5 peer-placeholder-shown:top-0 peer-placeholder-shown:text-sm uppercase'>Message</label>
          </div>
          <button type='submit' className='bg-[#009D66] mb-12 font-bold py-2 px-4 w-full text-white rounded-full download-inner-shadow border-[#009D66] border-t '>SEND</button>
          <div className='flex flex-col items-center w-full'>
            <div className='flex items-center justify-center gap-4 w-full mb-9'>
              <div className='w-[15%] border h-0 border-t-gray-500'></div>
              <p className='font-body text-[#009D66]'>OR</p>
              <div className='w-[15%] border h-0 border-t-gray-500'></div>
            </div>
            <p className='font-body text-[#94A3B8]'>www.richyaboagye@gmail.com</p>
          </div>


        </form>

      </div>
      

    </div>
  )
}

export default Contact