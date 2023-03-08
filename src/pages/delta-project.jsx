import React from 'react';
import Image from 'next/image';
import deltaImg from "@public/assets/projects/deltaproject.png";
import {RiRadioButtonFill} from "react-icons/ri"

const DeltaProject = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'  />
        <Image className='absolute' fill={true} style={{objectFit: "cover"}} src={deltaImg} alt={"/"} />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-[10] text-white'>
          <h2 className='py-2 '>Delta Project</h2>
          <h3>HTML5 | CSS3 | Vanilla JS</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>This project is a landing page designed for a web development agency that offers multiple services such as web development, mobile app development, and content writing. The page was built with HTML, CSS and vanilla JavaScript, using an original design found on Dribbble. This project has a clear structure and easy navigation, which allows users to quickly access information about the services offered. Each section of the page includes specific details about the services, as well as examples of the agency's previous work.</p>
          <button className='px-8 py-2 mt-4 mr-8'>Demo</button>
          <button className='px-8 py-2 mt-4'>Demo</button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> HTML5</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> CSS3</p>
              <p className='text-gray-600 py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> JavaScript</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DeltaProject