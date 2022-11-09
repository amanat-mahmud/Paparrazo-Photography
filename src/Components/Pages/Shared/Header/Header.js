import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/img/paparazzo3.png'
const Header = () => {
    const user = {}
    const menuItem = <>
    <li><a href='/'>Home</a></li>
    <li><a href='/services'>Services</a></li>
    <li><a href='/'>Blog</a></li>
    <li><a href='/'>My reviews</a></li>
    {
            user?.PHOTOURL?'': <li><a href='/login'>Login</a></li>
    }
                        
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link><img src={logo} alt='' className='w-20'></img></Link>
                <a className="btn btn-ghost normal-case text-xl hidden sm:block" href='/'>Paparrazo Photography</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            
            <div className="navbar-end">
            <div className="dropdown dropdown-end mr-2">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} alt="user"/>
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between" href='/'>
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a href='/'>Add Service</a></li>
        <li><Link><button className="btn btn-error">Log out</button></Link></li>
      </ul>
    </div >
                <a className="btn bg-white text-black hover:text-white" href='/'>Resgister</a>
            </div>
        </div>
    );
};

export default Header;