import React from 'react';
import logo from './images/photo.png';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn, faGithub, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons'

function Hero() {
return (
    <section id="heroSection">
    <Container>
        <Row>
            <Col>
                <div id="description">
                    <h2>Hi, my name is</h2>
                    <h1> <span id='myName'>Włodek</span></h1>
                    <h3>and I am a</h3>
                    <h2>Frontend Developer</h2>
                    <h3><Button variant="secondary">Check my projects</Button>{' '}</h3>
                    <h3><Button variant="secondary">Contact me</Button>{' '}</h3>
                    <h4><span className="contact-icon">
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
                    </h4>
                </div>
            </Col>
            <Col>
                <div className='photo-container'>
                    <img src={logo} alt="WMac" className='photo-style'/>
                </div>
            </Col>
        </Row>
    </Container>
    </section>
);    
}

export default Hero;

