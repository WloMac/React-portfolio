import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faJsSquare, faBootstrap, faGithub, faHtml5, faCss3, faReact, faNode} from '@fortawesome/free-brands-svg-icons';


export default function Skills() {

    return(
        <main>
        <h1>Skills</h1>
        <hr></hr>
        <span className='skills-icon'>
        <h1>
        <FontAwesomeIcon icon={faHtml5} size='2xl' className='skills-icon'/>
        <FontAwesomeIcon icon={faCss3} size='2xl' className='skills-icon'/>
        <FontAwesomeIcon icon={faBootstrap} size='2xl' className='skills-icon'/>
        <FontAwesomeIcon icon={faJsSquare} size='2xl' className='skills-icon'/>
        <FontAwesomeIcon icon={faNode} size='2xl' className='skills-icon'/>
        <FontAwesomeIcon icon={faReact} size='2xl' className='skills-icon'/>
        <FontAwesomeIcon icon={faGithub} size='2xl' className='skills-icon'/>
        </h1>
        </span>



        </main>
    )
    
}