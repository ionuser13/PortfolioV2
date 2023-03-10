import React from 'react';
import Image from 'next/image';
import catImg from "@public/assets/projects/catgram.png";
import {RiRadioButtonFill} from "react-icons/ri"
import Link from 'next/link';

const DeltaProject = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'  />
        <Image className='absolute' fill={true} style={{objectFit: "cover"}} src={catImg} alt={"/"} />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-[10] text-white'>
          <h2 className='py-2 '>Cattogram</h2>
          <h3>HTML5 | Bootstrap | Vanilla JS</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='pb-2'>Project</p>
          <h2>Overview</h2>
          <p className='py-4'>Cattogram is a web app that I developed for cat lovers to enjoy a curated feed of cat pictures. With Cattogram, users can save their favorite cat photos and upload their own cat pictures.As a developer, I wanted to create a project that not only showcased my technical skills but also brought joy to users. With Cattogram, I aimed to create a fun and enjoyable experience for cat lovers and provide a platform for them to share their love for felines.</p>
          <Link href={"https://github.com/ionuser13/Cat-"} target={"_blank"} title={"See a live demo"}>
            <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          </Link>
          <Link href={"https://ionuser13.github.io/Cat-/"} target={"_blank"} title={"See code in GitHub"}>
            <button className='px-8 py-2 mt-4'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-lg p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML5</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS3</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Bootstrap</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Axios</p>
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

export default DeltaProject