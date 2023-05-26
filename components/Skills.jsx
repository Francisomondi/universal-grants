import Image from 'next/image'
import React from 'react'
import Html from '../public/assets/cherani.jpg'
import css from '../public/assets/mtush.jpg'
import javascript from '../public/assets/salon.jpg'
import react from '../public/assets/fruits.jpg'
//import node from '../public/assets/node.png'
//import tailwind from '../public/assets/tailwind.png'
//import nextjs from '../public/assets/nextjs.png'
//import github from '../public/assets/github.png'

const Skills = () => {



  const skills = [
    {
      id: 1,
      src: Html,
      title: "Html",
      description: "My name is Susan Mutuku from Machakos. I did a tailoring course in 2009. I have been struggling to raise my kids since I have never gotten a reliable employment. A friend referred me to Universal Grants Ltd and I applied for Kes 100,000. My grants was approved and I received Kes 101,000. I bought my sewing machines, materials and rented a place for my business. My business is growing and I have employed 2 people currently I am very grateful to Universal Grants Ltd"
    },
    {
      id: 2,
      src: css,
      title: "Css",
      description: "My name is Betty Shiku from Murang'a. I have been working as a house help in Nairobi since 2019. I came across an advert about Universal Grants for Business and tried my luck. I was awarded Ksh 150,000 and I used it to start a Mtumba business that my friend introduced me to. I am very thankful to Universal Grants Ltd. My business is doing great "
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      description: " Am Karimi from Meru currently working in Kahawa West Nairobi. I am a salonist where I have been working for different people since 2005. I applied for Universal Grants and I was given Kes 200,000 to start my salon. My business is thriving very well and much thanks to Universal Grants Ltd"
    },
    {
      id: 4,
      src: react,
      title: "React",
      description: "I am Grace from Kiambu doing Grocery. I am grateful for Universal Grants Ltd for giving me Capital worth Kes 75,000 which has helped me to grow this business to this level. Again!!!I thank Universal Grants Ltd."
    },
    
  ]
  return (
    <div name='Testimony' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] max-auto flex flex-col justify-center h-full mt-10'>
        <h2 className='py-4'>Testimonials</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8' >

          {
            skills.map(({ id, src, title, description }) => (
              <div key={id} className='py-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                <div className='grid justify-center items-center'>
                  <div className='m-auto items-center fill-inherit'>
                    <Image src={src} alt='/' width={170} height={130} />
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                <h3>{title}</h3>
              </div>
                <div>{description}</div>
              </div>

            ))
          }



        </div>
      </div>
    </div>
  )
}

export default Skills