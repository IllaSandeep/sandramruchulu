import React from 'react';
import './temp.css'
const Footer = () => {
    const phoneNumber ='+918500805582'
    const instagramUsername = "sandramruchulu"
    const emailAddress = "sandramruchulu@gmail.com"
    return (
        <div className="footer1">   
            <p className='text'> Contact us </p>
            <a href={`tel:${phoneNumber}`} className='phn-call' >
                <img src=".\src\assets\phonecall.png" alt="Call Us" />
            </a>
            <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className='whs-cht'>
                <img src=".\src\assets\wspp.png" alt="Chat with us on WhatsApp" />
            </a>
            <a href={`https://instagram.com/${instagramUsername}`} target="_blank" rel="noopener noreferrer" className='insta'>
                <img src=".\src\assets\insta.png" alt="Follow us on Instagram" />
            </a>
            <a href={`mailto:${emailAddress}`} target="_blank" rel="noopener noreferrer" className='gmail'>
                <img src=".\src\assets\gmail.png" alt="Send us an email"  />
            </a>
        </div>
    );
};

export default Footer;