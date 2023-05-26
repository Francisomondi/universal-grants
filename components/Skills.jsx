import Image from 'next/image'
import React from 'react'
import Html from '../public/assets/html.png'
import css from '../public/assets/css.png'
import javascript from '../public/assets/javascript.png'
import react from '../public/assets/react.png'
import node from '../public/assets/node.png'
import tailwind from '../public/assets/tailwind.png'
import nextjs from '../public/assets/nextjs.png'
import github from '../public/assets/github.png'

const Skills = () => {



  const skills = [
    {
      id: 1,
      src: Html,
      title: "Html"
    },
    {
      id: 2,
      src: css,
      title: "Css"
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript"
    },
    {
      id: 4,
      src: react,
      title: "React"
    },
    {
      id: 5,
      src: node,
      title: "Node"
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind"
    },
    {
      id: 7,
      src: nextjs,
      title: "Nextjs"
    },
    {
      id: 7,
      src: github,
      title: "Github"
    },
  ]
  return (
    <div name='Skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] max-auto flex flex-col justify-center h-full'>
        <h2 className='py-4'>Skills</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8' >

          {
            skills.map(({ id, src, title }) => (
              <div key={id} className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                  <div className='m-auto'>
                    <Image src={src} alt='/' width={64} height={64} />
                  </div>

                  <div className='flex flex-col items-center justify-center'>
                    <h2>{title}</h2>
                  </div>
                </div>
              </div>

            ))
          }



        </div>
      </div>
    </div>
  )
}

export default Skills