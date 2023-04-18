import React from 'react';
import propertyImg from "@public/assets/projects/deltaproject.png";
import Link from 'next/link';
import Image from 'next/image';

const ProjectItem = ({title, technology, backgroundImg, projectUrl}) => {
  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-lg shadow-gray-900 rounded-xl group hover:bg-[#5DA2D5]'>
        <div className='h-auto w-full relative overflow-hidden rounded-xl'>
            <Image className='bg-cover relative rounded-xl group-hover:opacity-10 transition-all duration-100 ease-in group-hover:scale-105' src={backgroundImg} alt="/" />
        </div>
        <div className='opacity-0 group-hover:opacity-100 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all duration-75  ease-in'>
            <h3 className='text-xl text-white tracking-wider text-center sm:text-2xl whitespace-nowrap'>{title}</h3>
            <p className='pb-4 pt-2 text-white text-center'>{technology}</p>
            <Link href={projectUrl}>
                <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-gray-300 duration-100 w-[120px] mx-auto'>More info</p>
            </Link>
        </div>
    </div>
  )
}

export default ProjectItem