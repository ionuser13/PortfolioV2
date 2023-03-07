import Image from 'next/image';
import React from 'react'
import Link from 'next/link';
import deltaImg from "@public/assets/projects/deltaproject.png"
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-remarking-color'>Projects</p>
            <h2 className='py-4'>What I've built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem title={"Delta Project"} technology={"HTML, CSS and JS"} backgroundImg={deltaImg} projectUrl={"/property"} />

            </div>
        </div>
    </div>
  )
}

export default Projects