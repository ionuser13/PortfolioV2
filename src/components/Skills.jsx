import React from 'react';
import Image from 'next/image';
import IndividualSkill from './IndividualSkill';

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2' id='skills'>
        <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
            <p className='uppercase text-xl tracking-widest text-remarking-color'>Skills</p>
            <h2 className='py-4'>What can I do?</h2>
            <div className='grid md:grid-cols-2 lg:grid-flow-cols-4 gap-8'>

                <IndividualSkill source={"/../public/assets/skills/html.png"} skillName={"HTML5"}/>
                <IndividualSkill source={"/../public/assets/skills/css.png"} skillName={"CSS3"}/>
                <IndividualSkill source={"/../public/assets/skills/bootstrap.png"} skillName={"Bootstrap"}/>
                <IndividualSkill source={"/../public/assets/skills/tailwind.png"} skillName={"Tailwind CSS"}/>
                <IndividualSkill source={"/../public/assets/skills/sass.png"} skillName={"SASS"}/>
                <IndividualSkill source={"/../public/assets/skills/javascript.png"} skillName={"JavaScript"}/>
                <IndividualSkill source={"/../public/assets/skills/react.png"} skillName={"React JS"}/>
                <IndividualSkill source={"/../public/assets/skills/nextjs.png"} skillName={"Next JS"}/>
                <IndividualSkill source={"/../public/assets/skills/git.png"} skillName={"Git"}/>
                <IndividualSkill source={"/../public/assets/skills/github1.png"} skillName={"GitHub"}/>

            </div>
        </div>
    </div>
  )
}

export default Skills