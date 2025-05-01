import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold'>Login With</h2>
            <div className=" m-3 space-y-3">
                <button className='btn btn-secondary btn-outline w-full'> <FcGoogle size={25}></FcGoogle> Login With Goggle</button>
                <button className='btn btn-primary btn-outline w-full'><FaGithub size={25}></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;