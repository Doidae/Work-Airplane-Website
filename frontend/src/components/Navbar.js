import React from 'react';
import './style/Navbar.css';
import { NavLink } from 'react-router-dom';
import icon from './images/plane.png'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='navbar-left'>
                <img src={icon} alt='Logo' className='navbar-logo' exact to='/'/>
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
