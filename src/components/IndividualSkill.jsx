import React from 'react';
import Image from 'next/image';

const IndividualSkill = ({source}) => {
  return (
    <div className='p-6 hover:scale-105 ease-in duration-100'>
        <div className='grid gap-4 justify-center items-center'>
            <div className='m-auto'>
                <Image src={source} alt="/" width={64} height={64} />
            </div>
        </div>
    </div>
  )
}

export default IndividualSkill