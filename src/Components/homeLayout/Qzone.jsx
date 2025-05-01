import React from 'react';
import swimmingPng from '../../assets/swimming.png'
import classPng from '../../assets/class.png'
import playGroundPng from '../../assets/playground.png'
const Qzone = () => { 
    return (
        <div className='mt-6 bg-base-200 p-4'>
            <h2 className='font-bold'>Qzone</h2>
            <div className=" mt-5">
                <img src={swimmingPng} alt="" />
                <img src={classPng} alt="" />
                <img src={playGroundPng} alt="" />
            </div>
        </div>
    );
};

export default Qzone;