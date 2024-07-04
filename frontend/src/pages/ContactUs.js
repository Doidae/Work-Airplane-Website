import React from 'react'
import './style/ContactUs.css'
import { Link } from 'react-router-dom'

const ContactUs = () => {
    return(
        <div className='container'>
            <div className='Left'>
                <img src="https://via.placeholder.com/700" alt= "Placeholder"/>
            </div>
            <div className='Right'>
                <h2>Contact Us!</h2>
                <p>919-333-3333</p>
                <p>exampleEmail@gmail.com</p>
                <p>Fax Number here</p>
            </div>
        </div>
    )
}

export default ContactUs