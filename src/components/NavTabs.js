import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTabs.css';
import Photo from './Photo.js';

function NavTabs() {

    return (
        <header>

            <nav>
                
                <div className='nav-item'>
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Home
                    </NavLink>
                </div>
                <div className='nav-item'>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        About
                    </NavLink>
                </div>
                <div className='nav-item'>
                    <NavLink
                        to="/projects"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Projects
                    </NavLink>
                </div>
                <div className='nav-item'>
                    <NavLink
                        to="/contact"
                        end
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Contact
                    </NavLink>
                </div>
                <div className='nav-item'>
                    <NavLink
                        to="/contact/learn"
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'
                        }
                    >
                        Learn
                    </NavLink>
                </div>
            </nav>
            <Photo />
        </header>
    );
}

export default NavTabs;
