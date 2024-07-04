import React from "react"
import './style/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className = 'navbar'>
            <div className='navbar-right'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contactus'>Contact Us</Link>
            </div>
        </nav>
    )
}

export default Navbar