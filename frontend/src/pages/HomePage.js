import React from 'react';
import './style/HomePage.css';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage-container">
            <div>
                <h1 className="main-title">Welcome to Larry's Airplane Service!</h1>
                <p className="subtitle">Schedule a flight with us today!</p>
            </div>
            <Link to='/contactus' className="cta-button" aria-label="Contact Us">Contact Us</Link>

            <div className="image-container">
                <img src="https://via.placeholder.com/400" alt="Airplane flying in the sky" className="main-image" />
            </div>

            <div className="services-container">
                <h2 className="section-title">Featured Services</h2>
                <div className="service-item">
                    <h3>Private Charters</h3>
                    <p>Experience the luxury and convenience of private air travel.</p>
                </div>
                <div className="service-item">
                    <h3>Business Travel</h3>
                    <p>Efficient and comfortable travel for your business needs.</p>
                </div>
                <div className="service-item">
                    <h3>Aerial Tours</h3>
                    <p>Explore stunning landscapes from the sky.</p>
                </div>
            </div>

            <div className="testimonials-container">
                <h2 className="section-title">Testimonials</h2>
                <p className="testimonial">
                    "Larry's Airplane Service provided an unforgettable experience! The service was exceptional and the flight was smooth." - Jane Doe
                </p>
                <p className="testimonial">
                    "Highly recommend! The team was professional and attentive to our needs." - John Smith
                </p>
            </div>

            <div className="news-container">
                <h2 className="section-title">Latest News</h2>
                <div className="news-item">
                    <h3>New Destination Added</h3>
                    <p>We are excited to announce a new destination to our flight schedule.</p>
                </div>
                <div className="news-item">
                    <h3>Safety Measures Update</h3>
                    <p>Our enhanced safety protocols to ensure a safe journey.</p>
                </div>
            </div>
        </div>
    );
};

export default HomePage;