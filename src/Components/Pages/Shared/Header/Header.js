import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../assets/img/paparazzo3.png'
import { AuthContext } from '../../../../context/AuthProvider';
const Header = () => {
  const { user, logOut } = useContext(AuthContext)
  const menuItem = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/services'>Services</NavLink></li>
    <li><NavLink to='/blog'>Blog</NavLink></li>
    {
      user?.displayName ? '' : <li><NavLink to='/login'>Login</NavLink></li>
    }
  </>
  const handleLogout = () => {
    logOut()
      .then()
      .catch()
  }
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
      {user?.displayName?<div className="dropdown dropdown-end mr-2">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={user?.photoURL} alt="user" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className="text-center font-bold">{user?.displayName}</li>
            <li>
              <a className="justify-between" href='/'>
                Profile
              </a>
            </li>
            <li><Link to='/myreviews'>My reviews</Link></li>
            <li><Link to='/addservice'>Add Service</Link></li>
            <li><Link><button className="btn btn-error" onClick={handleLogout}>Log out</button></Link></li>
          </ul>
        </div >:''}
        {user?.displayName ? '' : <NavLink className="btn bg-white text-black hover:text-white" to='/register'>Resgister</NavLink>}
      </div>
    </div>
  );
};

export default Header;