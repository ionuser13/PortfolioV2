import React from 'react';
import Image from 'next/image';
import yardImg from "@public/assets/projects/ecommerce.png";
import {RiRadioButtonFill} from "react-icons/ri"
import Link from 'next/link';

const YardSale = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'  />
        <Image className='absolute' fill={true} style={{objectFit: "cover"}} src={yardImg} alt={"/"} />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-[10] text-white'>
          <h2 className='py-2 '>Yard Sale</h2>
          <h3>Next JS | CSS3 | SASS</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='pb-2'>Project</p>
          <h2>Overview</h2>
          <p className='py-4'>This is an e-commerce platform built with Next.js, which is a framework built on top of React. The project was migrated from a previous version built with React, and now includes new functionality and optimization features.</p>
          <Link href={"https://next-shop-xc5n-6ppsmle1u-ionuser13.vercel.app/"} target={"_blank"}>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href={"https://github.com/ionuser13/next-shop"} target={"_blank"}>
            <button className='px-8 py-2 mt-4'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Next JS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS3</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> SASS</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Context API</p>
            </div>
          </div>
        </div>
        <Link href={"/#projects"}>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default YardSale