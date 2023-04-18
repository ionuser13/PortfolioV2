import React from 'react';
import Image from 'next/image';
import deltaImg from "@public/assets/projects/starbucksRewards.png";
import {RiRadioButtonFill} from "react-icons/ri"
import Link from 'next/link';
import Head from 'next/head';

const DeltaProject = () => {
  return (
    <>
    <Head>
      <title>Starbucks Rewards</title>
      <meta
        name="description"
        content="Personal project made by John Chacpi"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <div className='w-full'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'  />
        <Image className='absolute' fill={true} style={{objectFit: "cover"}} src={deltaImg} alt={"/"} />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] z-[10] text-white'>
          <h2 className='py-2 '>Starbucks Rewards Clone</h2>
          <h3>React JS | Tailwind CSS</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='pb-2'>Project</p>
          <h2>Overview</h2>
          <p className='py-4'>This project is a clone of the Starbucks Rewards page, which includes animations and interations between the components from the original page, as well as the original links. The project was built with React JS and Tailwind CSS. It started with Create React App since it started before the React documentation update. This project takes advantage of React features.</p>
          
          <Link href={"https://github.com/ionuser13/starbucks-rewards"} target={"_blank"} title={"See a live demo"}>
            <button className='px-8 py-2 mt-4 mr-8 hover:scale-105 duration-100'>Demo</button>
          </Link>
          <Link href={"https://starbucks-rewards.vercel.app/"} target={"_blank"} title={"See code in GitHub"}>
            <button className='px-8 py-2 mt-4 hover:scale-105 duration-100'>Code</button>
          </Link>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-900 rounded-lg p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-2 md:grid-cols-1 gap-[4px]'>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> React JS</p>
              <p className='py-2 flex items-center'><RiRadioButtonFill className='pr-1' /> Tailwind CSS</p>
            </div>
          </div>
        </div>
        <Link href={"/#projects"}>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
    </>
  )
}

export default DeltaProject