import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {

  const SocialLinks = [
    {
      id: 1,
      child: (
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover: scale-105 ease-in duration-300'>
          <FaLinkedinIn />
        </div>
      ),
      href: 'https://www.linkedin.com/in/francis-omondi-958749172/',
      target: '_blank'
    },
    {
      id: 2,
      child: (
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover: scale-105 ease-in duration-300'>
          <FaGithub />
        </div>
      ),
      href: 'https://github.com/Francisomondi',
      target: '_blank'
    },
    {
      id: 3,
      child: (
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover: scale-105 ease-in duration-300'>
          <AiOutlineMail />
        </div>
      ),
      href: 'mailto:francisomondi17@gmail.com'
    },
    {
      id: 4,
      child: (
        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover: scale-105 ease-in duration-300'>
          <BsFillPersonLinesFill />
        </div>
      ),
      href: '/francis.pdf',
      download: true
    }
  ]

  return (
    <div name='Home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm -tracking-widest text-gray-600'>LETS WORK ON SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-700'>Hi, I am <span className='text-[#5b201d9e]'>Francis</span></h1>
          <h1 className='py-2 text-gray-700'>I am a full stack Developer</h1>
          <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
            I am a solution-driven professional excelling in highly collaborative work
            environment, finding solutions to challenges and focused on customer
            satisfaction. Proven experience developing consumer-focused back and
            front-end solutions in JavaScript node Js mongoDB, express and react
            (MERN Stack)
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>

            {SocialLinks.map(({ id, child, href, download, target }) => (
              <Link key={id} href={href} download={download} target={target}>
                <div className=' shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300' >
                  {child}
                </div>
              </Link>

            ))}

          </div>

        </div>
      </div>
    </div>
  )
}

export default Main