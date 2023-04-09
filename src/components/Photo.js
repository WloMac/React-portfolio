import React from 'react';
import './Photo.css'
import logo from './images/photo.png';

function Photo() {
return (
    <div className='photo-container'>
        <img src={logo} alt="WMac" className='photo-style'/>
    </div>
);    
}

export default Photo;

