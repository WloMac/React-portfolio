import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavTabs.css';

function NavTabs() {
    
    return (
        <header>
{/*             
                <ul className="nav nav-tabs">
                    <li className="nav-item"> */}
                    <nav>
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
                            to="/projects"
                            className={({ isActive }) =>
                                isActive ? 'nav-link active' : 'nav-link'
                            }
                        >
                            Projects
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
                </nav>
         </header>       
    );
}

export default NavTabs;
