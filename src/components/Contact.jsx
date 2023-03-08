import React from 'react';
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs"

const Contact = () => {
  return (
    <div className='w-full' id='contact'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-remarking-color'>Contact</p>
            <h2 className='py-4'>How can you reach me</h2>
            <div className='flex items-center justify-evenly  m-auto py-4'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsTwitter />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact