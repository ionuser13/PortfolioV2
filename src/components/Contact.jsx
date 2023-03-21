import React from 'react';
import {FaLinkedinIn, FaGithub} from "react-icons/fa";
import {AiOutlineMail} from "react-icons/ai";
import {BsTwitter} from "react-icons/bs"
import Link from 'next/link';

const Contact = () => {
  return (
    <div className='w-full' id='contact'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-remarking-color'>Contact</p>
            <h2 className='py-4'>How can you reach me</h2>
            <div className='flex items-center justify-evenly  m-auto py-4'>
                <Link href={"https://www.linkedin.com/in/john-f-chacpi-marchena-b9a48222b/"} target={"_blank"} title={"See my LinkedIn profile"}>
                    <div className='bg-section-background rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 hover:bg-hover-color ease-in duration-100'>
                        <FaLinkedinIn />
                    </div>
                </Link>
                <Link href={"https://github.com/ionuser13"} target={"_blank"} title={"My GitHub Profile"}>
                    <div className='bg-section-background rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 hover:bg-hover-color ease-in duration-100'>
                        <FaGithub />
                    </div>
                </Link>
                <Link href={"mailto:chacpijohn83@gmail.com"} target={"_blank"} title={"Contact me by mail"}>
                    <div className='bg-section-background rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 hover:bg-hover-color ease-in duration-100'>
                        <AiOutlineMail />
                    </div>
                </Link>
                <Link href={"https://twitter.com/ionuser03"} target={"_blank"} title={"Contact me via Twitter"}>
                    <div className='bg-section-background rounded-full shadow-lg shadow-gray-900 p-6 cursor-pointer hover:scale-110 hover:bg-hover-color ease-in duration-100'>
                        <BsTwitter />
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Contact