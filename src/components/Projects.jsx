import React from 'react'
import stabucksImg from "@public/assets/projects/starbucksRewards.png";
import ecommerceImg from "@public/assets/projects/ecommerce.png";
import galleryImg from "@public/assets/projects/songGallery.png";
import catImg from "@public/assets/projects/catgram.png"
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className='w-full' id='projects'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-remarking-color'>Projects</p>
            <h2 className='py-4'>What I&apos;ve built</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem title={"Yard Sale"} technology={"Next JS"} backgroundImg={ecommerceImg} projectUrl={"/yard-sale"} />
                <ProjectItem title={"Starbucks Rewards"} technology={"React JS, Tailwind CSS"} backgroundImg={stabucksImg} projectUrl={"/starbucks-rewards"} />
                <ProjectItem title={"Song Gallery"} technology={"HTML, CSS and JS"} backgroundImg={galleryImg} projectUrl={"/song-gallery"} />
                <ProjectItem title={"Cattogram"} technology={"HTML, CSS and JS"} backgroundImg={catImg} projectUrl={"/cattogram"} />

            </div>
        </div>
    </div>
  )
}

export default Projects