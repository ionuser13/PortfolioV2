import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16' id='about'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-remarking-color'>About</p>
                <h2 className='py-2 text-gray-600'>Who I Am</h2>
                <p className='py-2 text-gray-600'>I've always had a talent for computers and technology in general, always trying to know about how do they work and find not common features. In 2020, I had my first approach to programming itself by making small projects as part of the Basic Programming Course on Platzi. Later, in 2022, I started learning JavaScript itself, motivated mostly by curiosity.</p>
                <p className='py-2 text-gray-600'>Fascinated with how intricate that world can be, I was drawn to learn more. I started learning HTML & CSS and continue learning JavaScript to make interactive websites. Later, I started to build projects in order to test and sharpen my skills. I am now spending my time learning new technologies and building projects with React JS. </p>
                <p className='py-2 text-gray-600 underline cursor-pointer'>
                  <Link href={"https://github.com/ionuser13"}>Check out some of my latest projects.</Link>
                </p>
            </div>
            <div className='w-fit h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex justify-center items-center p-4 hover:scale-105 ease-in duration-300 md:w-full'>
              <img src="https://avatars.githubusercontent.com/u/106779883?v=4" alt="/" className='rounded-xl' />
            </div>
        </div>
    </div>
  )
}

export default About