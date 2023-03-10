import React from 'react';
import Image from 'next/image';

const IndividualSkill = ({source, skillName}) => {
  return (
    <div className='bg-section-background p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300'>
        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
            <div className='flex flex-col items-center justify-center'>
                <h3>{skillName}</h3>
            </div>
            <div className='m-auto'>
                <Image src={source} alt="/" width={64} height={64} />
            </div>
        </div>
    </div>
  )
}

export default IndividualSkill