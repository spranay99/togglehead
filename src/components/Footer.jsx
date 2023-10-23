import React from 'react'
import {FaFacebookF, FaLinkedin, FaInstagram, FaTwitter, FaYoutube, FaQuora, FaLocationDot} from "react-icons/fa6";
import {MdOutlineTimer, MdTrain} from "react-icons/md";

const Footer = () => {
  return (
    <footer>
        <div className='footer'>
            <div className='contact'>
                <h2>Contact us</h2>
                <p>Address : Lorem ipsum dolor sit amet</p>
                <p>Email id: sed do eiusmod tempor incididunt</p>
                <p>Phone no: 123456789</p>
            </div>
            <div className='social'>
                <h2>Follow us</h2>
                <FaFacebookF className='social-icon'/>
                <FaLinkedin className='social-icon'/>
                <FaInstagram className='social-icon'/>
                <FaTwitter className='social-icon'/>
                <FaYoutube className='social-icon'/>
                <FaQuora className='social-icon'/>
            </div>
            <div className='headoffice'>
                <h2>Head Office</h2>
                <p><FaLocationDot /> &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                <p><MdOutlineTimer /> &nbsp; Lorem ipsum dolor sit amet adipiscing </p>
                <p><MdOutlineTimer /> &nbsp; Lorem ipsum dolor sit amet adipiscing </p>
                <p><MdTrain /> &nbsp; Lorem ipsum dolor sit amet</p>
            </div>
        </div>
        <p className='footer-banner'>&#169; 2023 All Rights Reserved. Privacy Policy</p>
    </footer>
  )
}

export default Footer