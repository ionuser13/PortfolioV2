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
            <div className='grid md:grid-cols-2 lg:grid-flow-cols-4 gap-8'>

                <IndividualSkill source={htmlImage} skillName={"HTML5"}/>
                <IndividualSkill source={cssImage} skillName={"CSS3"}/>
                <IndividualSkill source={bootstrapImage} skillName={"Bootstrap"}/>
                <IndividualSkill source={tailwindImage} skillName={"Tailwind CSS"}/>
                <IndividualSkill source={sassImage} skillName={"SASS"}/>
                <IndividualSkill source={jsImage} skillName={"JavaScript"}/>
                <IndividualSkill source={reactImage} skillName={"React JS"}/>
                <IndividualSkill source={nextImage} skillName={"Next JS"}/>
                <IndividualSkill source={gitImage} skillName={"Git"}/>
                <IndividualSkill source={githubImage} skillName={"GitHub"}/>

            </div>
        </div>
    </div>
  )
}

export default Skills