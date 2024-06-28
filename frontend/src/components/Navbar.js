import React from "react"
import './style/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact Us</Link>
            </div>
        </nav>
    )
}

export default Navbar