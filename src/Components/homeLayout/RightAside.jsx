import React, { use } from 'react';
import SocialLogin from './SocialLogin';
import FindUs from './FindUs';
import Qzone from './Qzone';
import { AuthContex } from '../../provider/AuthProvider';

const RightAside = () => {
    const {user}=use(AuthContex)
    return (
        <div>
            {user? '': <SocialLogin></SocialLogin> }
            <FindUs></FindUs>
            <Qzone></Qzone>
        </div>
    );
};

export default RightAside;