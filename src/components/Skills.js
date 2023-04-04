import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faJsSquare, faBootstrap, faGithub, faHtml5, faCss3, faReact, faNode} from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

export default function Skills() {

    return(
        <main>
        <h1>Skills</h1>
        <hr></hr>
        <span className='skills-icons'>
        <h1>
        <FontAwesomeIcon icon={faHtml5} size='2xl'/>
        <FontAwesomeIcon icon={faCss3} size='2xl'/>
        <FontAwesomeIcon icon={faBootstrap} size='2xl'/>
        <FontAwesomeIcon icon={faJsSquare} size='2xl'/>
        <FontAwesomeIcon icon={faNode} size='2xl'/>
        <FontAwesomeIcon icon={faReact} size='2xl'/>
        <FontAwesomeIcon icon={faGithub} size='2xl'/>
        </h1>
        </span>



        </main>
    )
    
}