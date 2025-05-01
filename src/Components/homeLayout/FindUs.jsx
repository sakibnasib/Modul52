import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa6';

const FindUs = () => {
    return (
        <div>
            <h2 className='font-bold mt-4'>FindUs</h2>
            <div className="">
            <div className="join join-vertical mt-5 w-full t">
  <button className="btn bg-base-100 w-full  justify-start">
    <FaFacebook size={25} color='blue'></FaFacebook>
    Facebook
    </button>
  <button className="btn bg-base-100  w-full justify-start">
    <FaTwitter size={25} color='blue'></FaTwitter>
    Twitter
    </button>
  <button className="btn bg-base-100  w-full justify-start">
    <FaInstagram size={25} color='red'></FaInstagram>
  Instagram
    </button>
</div>
            </div>
        </div>
    );
};

export default FindUs;