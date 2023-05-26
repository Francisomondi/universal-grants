import { Link } from 'react-scroll'
import React from 'react'
import Image from 'next/image'
import aziz from '../public/assets/G.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'



const About = () => {
  return (
    <div name='About' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1024px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='py-4'>About Us</h2>
          {/*  <p className='py-2 text-gray-600'> I am not your normal developer</p>*/}

          <p className='py-2 text-gray-600'>Universal Grants (UG) ltd is an international 
          Non-Governmental Organization offering non-refundable 
          loans to Kenyans to Start up new businesses and boost 
          existing businesses. We also offer grants for emergencies 
          such as Medical Bills, School Fees, Famine & hunger among 
          others. Our main goal is to support the young businesses to 
          scale innovative business models that create positive impact 
          and contribute to achieving the Sustainable Development Goals.</p>

          <p className='py-2 text-gray-600'>Universal Grants Ltd has availed many opportunities 
          to Kenyan youths who want to venture into business. The fund
          is available to Kenyan people aged between 18 and 50 years.It 
          also aim is to help youth stabilize financially and also promote 
          employment through the creation of jobs.It also offers mentorship 
          programs to entrepreneurs. Universal Grants Ltd offers funding for 
          entrepreneurs or individuals who want 
          to start a new business venture or run an existing one.</p>

          <div>
            <Link to='Skills' smooth='true' duration={500} >
              <button className=' group w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer'>
                Testimonials
                <span className='group-hover:rotate-90 duration-500 '>
                  <MdOutlineKeyboardArrowRight size={25} className='ml-3' />
                </span>
              </button>

            </Link>
          </div>
        </div>
        <div className='w-full h-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 duration-300'>
          <Image className='rounded-xl' src={aziz} alt='my hero image' />

        </div>
      </div>
    </div>
  )
}

export default About