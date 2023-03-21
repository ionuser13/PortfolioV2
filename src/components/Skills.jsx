import React from 'react';
import htmlImage from "@public/assets/skills/html.png";
import cssImage from "@public/assets/skills/css.png";
import bootstrapImage from "@public/assets/skills/bootstrap.png";
import tailwindImage from "@public/assets/skills/tailwind.png";
import sassImage from "@public/assets/skills/sass.png";
import jsImage from "@public/assets/skills/javascript.png"
import reactImage from "@public/assets/skills/react.png"
import nextImage from "@public/assets/skills/nextjs.png";
import gitImage from "@public/assets/skills/git.png";
import githubImage from "@public/assets/skills/github1.png";
import IndividualSkill from './IndividualSkill';


const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2' id='skills'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-xl tracking-widest text-remarking-color'>Skills</p>
            <h2 className='py-4'>What can I use?</h2>
            <div className='flex flex-wrap justify-center md:justify-start gap-8 xl:gap-x-32 md:gap-y-16'>

                <IndividualSkill source={htmlImage}/>
                <IndividualSkill source={cssImage}/>
                <IndividualSkill source={bootstrapImage}/>
                <IndividualSkill source={tailwindImage}/>
                <IndividualSkill source={sassImage}/>
                <IndividualSkill source={jsImage}/>
                <IndividualSkill source={reactImage}/>
                <IndividualSkill source={nextImage}/>
                <IndividualSkill source={gitImage}/>
                <IndividualSkill source={githubImage}/>

            </div>
        </div>
    </div>
  )
}

export default Skills