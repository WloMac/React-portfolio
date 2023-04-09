import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'
import './Footer.css'

function Footer() {
    return (
    <footer>
        <h4>Contact</h4>
        <hr></hr>
        <span className="contact-icon">
        <a href="mailto:wmac.webdev@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} size='2xl' className='contact-icon'/>
        </a>
        
        <a href='https://www.linkedin.com/in/wlodzimierz-maciaszczyk-09341b1b8/'>
        <FontAwesomeIcon icon={faLinkedinIn} size='2xl' className='contact-icon'/>
        </a>
        <a href='https://github.com/WloMac'>
        <FontAwesomeIcon icon={faGithub} size='2xl' className='contact-icon'/>
        </a>

        <a href='https://twitter.com/Wolodiamac'>
        <FontAwesomeIcon icon={faTwitter} size='2xl' className='contact-icon'/>
        </a>
        </span>
        <h5>&copy desinged by WMac in 2023</h5>
        {/* <span className="credits">background by <a href="https://unsplash.com/de/@skabrera?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sergi Kabrera</a> on <a href="https://unsplash.com/backgrounds/phone/keyboard?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
        {/* </span> */}


    </footer>

    );
    
}


export default Footer;

