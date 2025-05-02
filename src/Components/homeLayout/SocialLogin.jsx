import React, { use } from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContex } from '../../provider/AuthProvider';

const SocialLogin = () => {
    const{goggle}=use(AuthContex)
    const handleGoglle=()=>{
        goggle()
        .then(()=>{

        }).catch(error=>{
            console.log(error)
        })
    }
    return (
        <div>
            <h2 className='font-bold'>Login With</h2>
            <div className=" m-3 space-y-3">
                <button onClick={handleGoglle} className='btn btn-secondary btn-outline w-full'> <FcGoogle size={25}></FcGoogle> Login With Goggle</button>
                <button className='btn btn-primary btn-outline w-full'><FaGithub size={25}></FaGithub> Login with Github</button>
            </div>
        </div>
    );
};

export default SocialLogin;