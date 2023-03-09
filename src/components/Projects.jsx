import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import deltaImg from "@public/assets/projects/deltaproject.png";
import ecommerceImg from "@public/assets/projects/ecommerce.png";
import galleryImg from "@public/assets/projects/songGallery.png"
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className='w-full' id='projects'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-remarking-color'>Projects</p>
            <h2 className='py-4'>What I&apos;ve built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem title={"Delta Project"} technology={"HTML, CSS and JS"} backgroundImg={deltaImg} projectUrl={"/delta-project"} />
                <ProjectItem title={"Song Gallery"} technology={"HTML, CSS and JS"} backgroundImg={galleryImg} projectUrl={"/song-gallery"} />
                <ProjectItem title={"Yard Sale"} technology={"Next JS"} backgroundImg={ecommerceImg} projectUrl={"/yard-sale"} />

            </div>
        </div>
    </div>
  )
}

export default Projects