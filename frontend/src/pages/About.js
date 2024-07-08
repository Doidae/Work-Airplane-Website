import React from 'react'
import './style/About.css'
// import { Link } from 'react-router-dom'

const About = () => {
    return(
        <div className='about-container'>
            <div className='top-container'>
                <div>
                    <h1>About LAS</h1>
                </div>
                <div>
                    <img src='https://via.placeholder.com/400' alt='Placeholder'/>
                </div>
            </div>
            <div>
                <p>Welcome to [Your Company Name], your premier choice for personalized small airplane flight services. We are dedicated to providing a unique and unforgettable flying experience, whether you're looking for a scenic tour, a private charter, or an aerial photography session. Our fleet of modern, well-maintained aircraft and our team of experienced pilots ensure your safety and comfort on every journey. At [Your Company Name], we pride ourselves on our exceptional customer service and attention to detail, making your flight experience with us smooth and enjoyable 
                    from takeoff to landing. Discover the skies like never before with [Your Company Name].</p>
            </div>
            
        </div>
    )
}

export default About