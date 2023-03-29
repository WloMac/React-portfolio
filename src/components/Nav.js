import React from 'react';
import { NavLink } from 'react-router-dom';


function Nav() {
    return (
        <div className="menu">
        <ul>
            <li>
            <NavLink
                to="/"
                end
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Home
            </NavLink>
            </li>
            <li>
                <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                About
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/projects"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Blog
            </NavLink>
            </li>
            <li>
            <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Contact
            </NavLink>
            </li>
            <li>
            <NavLink
                to="/contact/learn"
                className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                }
            >
                Learn
            </NavLink>
            </li>
            
        </ul>
        
        </div>

    );
}



export default Nav;