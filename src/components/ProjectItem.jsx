import React from 'react';
import propertyImg from "@public/assets/projects/deltaproject.png";
import Link from 'next/link';
import Image from 'next/image';

const ProjectItem = ({title, technology, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-remarking-color to-light-gradient-color'>
        <div className='h-auto w-full relative overflow-hidden rounded-xl'>
            <Image className='bg-cover relative rounded-xl group-hover:opacity-10 transition-all duration-300 ease-in group-hover:scale-105' src={backgroundImg} alt="/" />
        </div>
        <div className='opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-75  ease-in'>
            <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{technology}</p>
            <Link href={"/"}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More info</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem