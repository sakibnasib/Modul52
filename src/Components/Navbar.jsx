import React from 'react';
import { NavLink } from 'react-router';
import userlogo from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center'>
           <div className=""></div>
           <div className="nav flex gap-3 text-accent">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
           </div>
           <div className="login-button flex gap-2">
            <img src={userlogo} alt="" />
            <button className='btn btn-primary'>Loging</button>
           </div>
        </div>
    );
};

export default Navbar;