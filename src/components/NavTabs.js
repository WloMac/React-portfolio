import React from 'react';
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes } from 'react-icons/fa'
import { useRef } from 'react';
import './NavTabs.css';

function NavTabs() {
    const navRef = useRef();

    const showNavBar = ()=> 
        navRef.current.classList.toggle("responsive_nav");
    return (
        <header>
            <nav ref = {navRef}>
                {/* <ul className="nav nav-tabs">
                    <li className="nav-item"> */}
                        <NavLink
                            to="/"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Home
                        </NavLink>
                    {/* </li>
                    <li className="nav-item"> */}
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            About
                        </NavLink>
                    {/* </li>
                    <li className="nav-item"> */}
                        <NavLink
                            to="/blog"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Skills
                        </NavLink>
                    {/* </li>
                    <li className="nav-item"> */}
                        <NavLink
                            to="/contact"
                            end
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Contact
                        </NavLink>
                    {/* </li>
                    <li className="nav-item"> */}
                        <NavLink
                            to="/contact/learn"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Learn
                        </NavLink>
                    {/* </li>
                </ul> */}
                <button>
                    <FaTimes className='nav-btn nav-close-btn' onClick={showNavBar}/>
                </button>
            </nav>
            <button> 
                <FaBars className='nav-btn' onClick={showNavBar}/>
            </button>
        </header>
    );
}

export default NavTabs;
