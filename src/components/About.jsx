import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16' id='about'>
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-remarking-color'>About Me</p>
                <h2 className='py-2'>Who I Am</h2>
                <p className='py-2'>In 2020, I had my first approach to programming itself by making small projects as part of the Basic Programming Course on Platzi. Later, in 2022, I started learning JavaScript itself, motivated mostly by curiosity.</p>
                <p className='py-2'>Fascinated with how intricate the world of software development could be, I started learning HTML & CSS and continue learning JavaScript to make interactive websites. Later, I started to build projects in order to test and sharpen my skills.</p>
                <p className='py-2'>I am now spending my time learning new technologies and building projects, while searching for new opportunities to make a good impact with my skills.</p>
                <p className='py-2 underline cursor-pointer hover:no-underline'>
                  <Link href={"https://github.com/ionuser13?tab=repositories"} target={"_blank"}>Check out some of my latest projects.</Link>
                </p>
            </div>
            <div className='bg-section-background w-fit h-auto m-auto shadow-lg shadow-gray-900 rounded-xl flex justify-center items-center p-4 md:w-full overflow-hidden'>
              <img src="https://avatars.githubusercontent.com/u/106779883?v=4" alt="/" className='rounded-xl hover:scale-105 ease-in duration-100' />
            </div>
        </div>
    </div>
  )
}

export default About