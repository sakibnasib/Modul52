import React from 'react';
import Marquee from 'react-fast-marquee';

const Hilight = () => {
    return (
        <div className='flex items-center gap-3 bg-base-300 p-2'>
            <p className='bg-secondary p-2 text-base-100'>Laest </p>
            <Marquee className=''>
            <p className='text-red-300'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, rem!
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit, rem!</p>
            </Marquee>
            
        </div>
    );
};

export default Hilight;