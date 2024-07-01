import React from 'react'
import './style/HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div className="intro-container">
                <h1>Welcome to Larry's Airplane Service!</h1>
                <p>Schedule a flight with us today!</p>
                <Link to='/contactus' className="navbar-button2">Contact Us</Link>
            </div>
            <div className="image-container">
                <img src="https://via.placeholder.com/400" alt="Game Achievements" />
            </div>
            
        </div>
    );
};

export default HomePage