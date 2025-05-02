import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userlogo from '../assets/user.png'
import { AuthContex } from '../provider/AuthProvider';
const Navbar = () => {
    const {user,logOut}=use(AuthContex)
    const handleLogOut=()=>{
        logOut().then(() => {
            alert("You Logged Out successfully");
          })
          .catch((error) => {
            console.log(error);
          });
    }
    return (
        <div className='flex justify-between items-center'>
           <div className="">
           {user && user.email}
           </div>
           <div className="nav flex gap-3 text-accent">
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/career'>Career</NavLink>
           </div>
           <div className="login-button flex gap-2">
            <img className='w-12 rounded-full' src={`${user ? user.photoURL :userlogo }`} alt="" />
            {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10 ">
            LogOut
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            Login
          </Link>
        )}
           </div>
        </div>
    );
};

export default Navbar;