import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assates/hetali logo_final_29.7 1.png'
import '../Custom.css'

const Navbar = () => {

    const menuItem = <>
        <li><Link className='navunder rounded-lg text-xl  ' to='/home'>ABOUT US</Link></li>
        <li><Link className='navunder rounded-lg text-xl' to='/about'>PROJECTS</Link></li>
        <li><Link className='navunder rounded-lg text-xl' to='/profile'>DIVERSIFICATION</Link></li>
        <li><Link className='navunder rounded-lg text-xl' to='/profile'>OUR PROCESS</Link></li>
        <li><Link className='navunder rounded-lg text-xl' to='/profile'>TESTIMONIALS</Link></li>
        <li><Link className='navunder rounded-lg text-xl' to='/profile'>CAREERS</Link></li>
        <li><Link className='navunder rounded-lg text-xl' to='/profile'>CONTACT US</Link></li>

    </>


    return (
        <div className="navbar  shadow-xl">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow-lg bg-primary  rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>

                <span className=" w-100"><img className='w-100' src={image} alt="" />
                </span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 ">
                    {menuItem}
                </ul>
            </div>
            {/* <div className="navbar-end">
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div> */}
        </div>
    );
};

export default Navbar;