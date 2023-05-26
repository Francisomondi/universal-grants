import {Link} from 'react-scroll'
import React, {useState,useEffect} from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Navbar = () => {

    const links = [
        {
            id:1,
            link:'Home'
        },
        {
            id:2,
            link:'About'
        },
        {
            id:3,
            link:'Skills'
        },
        {
            id:4,
            link:'Projects'
        },
        {
            id:5,
            link:'Contacts'
        }
    ]


    const SocialLinks=[
        {
            id:1,
            child: (
                <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
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

const [nav, setNav] = useState(false)
const [shadow,setShadow]= useState(false)

const handleNav=()=>{
    setNav(!nav)
}

useEffect(()=>{
    const handleShadow =()=>{
        if (window.scrollY >= 90){
            setShadow(true)
        }
        else{
            setShadow(false)
        }
    }
    window.addEventListener('scroll',handleShadow)
},[])


    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100]': 'fixed w-full h-20 z-[100]'}>
            <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
            <h1 className='text-4xl font-bold font-signature'>Francis Omondi</h1>
            </Link>
            
                <div>
                    <ul className='hidden md:flex'>
                    {links.map(({id,link})=>(
                            <Link to={link}
                            smooth='true'
                            duration={500} key={id}
                             className='ml-10 text-sm uppercase hover:border-b font-medium hover:scale-105 duration-500'>
                                {link}
                            </Link>

                    ))}

                    </ul>
                    <div onClick={handleNav} className='md:hidden'>
                    <AiOutlineMenu size={30}/>
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70':""}>
                <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500': 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h1 className='text-3xl font-bold font-signature'>Francis Omondi</h1>
                            <div onClick={handleNav}  className='rounded-full shadow-lg shadow-gray-00 p-3 cursor-pointer'>
                                <AiOutlineClose/>
                            </div>
                        </div>
                        <div className='border-b border-gray-300 my-4'>
                        <p className='w-[85%] md:w-[95%] py-2'>Full Stack Web Solution</p>
                        </div>
                    </div>

                    <div className=' py-4 flex flex-col'>
                        <ul className='uppercase'>
                            {links.map(({id,link})=>(
                                <Link key={id}
                                to={link}
                                 onClick={()=>setNav(false)}
                                smooth='true'
                                duration={500}>
                                <li className='py-4 text-sm border-b font-medium hover:scale-105 duration-200'>{link}</li>
                                </Link>
                               
                            ))}
                        </ul>

                        <div className='pt-20'>
                            <p className='uppercase tracking-widest text-[#5651e5] font-bold'>Lets connect</p>
                            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                            
                            {SocialLinks.map(({id,child,href,download,target})=>(
                                <Link key={id} href={href} download={download} target={target}>
                                    <div className=' p-3 cursor-pointer hover: scale-105 ease-in duration-300' >
                                    {child}
                                    </div>
                                </Link>
                            ))} 
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar