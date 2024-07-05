import React from 'react';
import './style/Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                {/* <img src='./frontend/airplane.jpg' alt='Logo' className='navbar-logo'/> */}
                <span className='navbar-title'>LAS</span>
            </div>
            <div className='navbar-right'>
                <NavLink exact to='/' activeClassName='active' className='navbar-link'>
                    Home
                </NavLink>
                <NavLink to='/about' activeClassName='active' className='navbar-link'>
                    About
                </NavLink>
                <NavLink to='/contactus' activeClassName='active' className='navbar-link'>
                    Contact Us
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
