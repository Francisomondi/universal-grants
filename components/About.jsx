import { Link } from 'react-scroll'
import React from 'react'
import Image from 'next/image'
import aziz from '../public/assets/aziz.jpg'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'



const About = () => {
  return (
    <div name='About' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1024px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='py-4'>Who I Am </h2>
          {/*  <p className='py-2 text-gray-600'> I am not your normal developer</p>*/}

          <p className='py-2 text-gray-600'>I am a full stack software developer with experience
            building products for web app users, meeting highest
            standards for design, user experience, best practices, usability and
            speed. Responding to challenges by designing and developing solutions
            and building applications aligned to customers services. Translating
            solutions into code and working across many different APIs, third-party
            integrations and databases</p>
          <p className='py-2 text-gray-600'>I bring hands-on experience participating in and leading product design
            projects, including gathering user requirements, producing code,
            creating mockups and designing deployment, scale-up and load
            balancing architectures. I focus on creating clean, robust code with
            exceptional security and I am able to achieve compatibility targets while
            meeting and exceeding customer demands</p>

          <div>
            <Link to='Projects' smooth='true' duration={500} >
              <button className=' group w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer'>
                Sample work
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