import React from 'react';
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsPersonLinesFill} from "react-icons/bs"
import Link from 'next/link';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
        <div className='main-section bg-[#8e8e8e] bg-fixed bg-cover bg-center h-full w-full absolute z-[-1] '></div>
        <div className='backdrop-blur-xl max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-white '>Let's build something together</p>
                <h1 className='py-4 text-white'>
                    Hello there, I'm <span className='text-remarking-color'>John</span>
                </h1>
                <h1 className='py-4 text-white'>
                    A Front-End Developer
                </h1>
                <p className='py-4 text-white max-w-[70%] m-auto'>I'm a Front-End Developer specializing in building exceptional digital experiences. Currently, I'm focused on building responsive front-end applications while honing my skills.</p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <Link href={"https://www.linkedin.com/in/john-f-chacpi-marchena-b9a48222b/"} target={"_blank"} >
                        <div className='bg-background-color rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                    </Link>
                    <Link href={"https://github.com/ionuser13"} target={"_blank"}>
                        <div className='bg-background-color rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                    </Link>
                    <Link href={"mailto:chacpijohn83@gmail.com"} target={"_blank"}>
                        <div className='bg-background-color rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                    </Link>
                    <Link href={"/#contact"}>
                        <div className='bg-background-color rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <BsPersonLinesFill />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main