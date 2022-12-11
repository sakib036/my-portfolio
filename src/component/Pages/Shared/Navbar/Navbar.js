import React from 'react';
import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navManu = <>
    <li className="rounded-2xl mx-2"><NavLink to='/'>Home</NavLink></li>
    <li className="rounded-2xl"><NavLink to='/projects'>Projects</NavLink></li> 
    <li className="rounded-2xl"><NavLink to='/contact'>Contact</NavLink></li> 
   <a href="https://drive.google.com/uc?export=download&id=1fELO3UX0R2bHxhBezgzRapPaSSSMQ-yF" download='Md. Nazmus Sakib.pdf'>
   <button className='p-2 bg-blue-600 rounded-2xl ml-12 '>Download Resume</button>
   </a>
    </>
    
        return (
            <div className="navbar flex justify-around border-2 border-red-600 bg-gradient-to-t from-violet-500 to-fuchsia-500 text-white sticky top-0 z-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gradient-to-t from-fuchsia-500 to-violet-500 rounded-box w-52">
                            {navManu}
                        </ul>
                    </div>
                    
                    <Link to='/' className="btn btn-ghost  normal-case text-xl">MD. NAZMUS SAKIB</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-2 mx-2">
                        {navManu}
                    </ul>
                </div>
                <label htmlFor="dashboard-drawer" tabIndex={2} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
    
            </div>
        );
    
};

export default Navbar;