import React from 'react';
import './style/ContactUs.css';

const ContactUs = () => {
    return(
        <div className='container'>
            <div className='left'>
                <img src="https://via.placeholder.com/700" alt="Placeholder" />
            </div>
            <div className='right'>
                <h2>Contact Us!</h2>
                <p>Phone: 919-333-3333</p>
                <p>Email: exampleEmail@gmail.com</p>
                <p>Fax: Fax Number here</p>
                
                <h3>Office Hours</h3>
                <p>Monday - Friday: 9am - 5pm</p>
                <p>Saturday: 10am - 4pm</p>
                <p>Sunday: Closed</p>

                <h3>Follow Us</h3>
                <p>
                    <a href="#">Facebook</a> | <a href="#">Twitter</a> | <a href="#">Instagram</a>
                </p>
                
                <h3>Send Us a Message</h3>
                <form className="contact-form">
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" rows="4" required></textarea>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className='map-container'>
                <h3>Our Location</h3>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3439.588909093802!2d-78.74643689944863!3d35.54037857818581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac85e10b9fc29b%3A0x89e4ccbe54a1b5b3!2s78NC%20Fuquay%2FAngier%20Field!5e0!3m2!1sen!2sus!4v1720482348122!5m2!1sen!2sus"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Our Location"
                ></iframe>
            </div>
        </div>
    );
}

export default ContactUs;
