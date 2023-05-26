import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail, AiOutlineToTop } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import c from '../public/assets/b.jpg'

const Contacts = () => {

    const SocialLinks=[
        {
            id:1,
            child: (
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover: scale-105 ease-in duration-300'>
                    <FaLinkedinIn/> 
                </div>
            ),
            href:'https://www.linkedin.com/in/francis-omondi-958749172/',
            target:'_blank'
        },
        {
            id:2,
            child: (
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover: scale-105 ease-in duration-300'>
                    <FaGithub/> 
                </div>
            ),
            href:'https://github.com/Francisomondi',
            target:'_blank'
        },
        {
            id:3,
            child: (
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover: scale-105 ease-in duration-300'>
                    <AiOutlineMail/> 
                </div>
            ),
            href:'mailto:francisomondi17@gmail.com'
        },
        {
            id:4,
            child: (
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover: scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill/> 
                </div>
            ),
            href:'/francis.pdf',
            download: true
        }
    ]
return (
    <div name='Contacts' className='w-full lg:h-screen'>
    <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
    <p className='text-xl tracking-widest uppercase text-[#5b201d9e]'>Contacts</p>
    <h2 className='py-4'>Get In Touch</h2>
        
        <div className='grid lg:grid-cols-5 gap-8'>
        {/*right*/}
        <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-800 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
                <div>
                <Image className='rounded-xl hover:scale-105 ease-in duration-300' src={c} alt='//'/>
                </div>
                <div>
                    <h2 className='py-2'>Francis Omondi</h2>
                    <p>Full Stack Developer</p>
                    <p className='py-4' >I am available for freelance or full-time positions.</p>
                </div>
                <div>
                    <p className='uppercase pt-8'>Connect With Me</p>
                    <div className='flex items-center justify-between py-4'>
                        {SocialLinks.map(({id,child,href,download,target})=>(
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

        {/*left*/}

        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-500 rounded-xl lg:p-4' >
        <div className='p-4'>
    <form action='https://getform.io/f/f80c7360-7049-4c4f-b090-2479554ab011' method="POST">
            <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='name' placeholder='Full name'/>
                </div>

                <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'  name='phone' placeholder='Phone Number'/>
                </div>
            </div> 
            
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Email</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email' placeholder='Email'/>    
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Subject</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text'  name='subject' placeholder='Subject'/>    
            </div>
            <div className='flex flex-col py-2'>
                <label className='uppercase text-sm py-2'>Message</label>
                <textarea className='border-2 rounded-lg p-3 border-gray-300'  name='message' placeholder='Message' rows={10}></textarea>    
            </div>
            <button className='w-full p-4 text-gray-100 mt-4 hover:scale-105 duration-500'>Send message</button>
    </form>
        </div>
        
        </div>

        </div>

        <div className='flex justify-center py-12'>
            <Link href='/'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineToTop className='text-[#5b201d9e]'/>
                </div>
            </Link>
        </div>
    </div>

    </div>
)
}

export default Contacts