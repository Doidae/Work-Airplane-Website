import React from 'react'
import './style/HomePage.css'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="homepage-container">
            
            <div className="intro-container">
                <h1 className="main-title">Welcome to Larry's Airplane Service!</h1>
                <p className="subtitle">Schedule a flight with us today!</p>
                <Link to='/contactus' className="cta-button">Contact Us</Link>
            </div>
            <div className="image-container">
                <img src="https://via.placeholder.com/400" alt="Airplane" className="main-image" />
            </div>
        </div>
    );
    
};

export default HomePage