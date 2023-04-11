import React from "react";
import './Projects.css';
import screenshot from '../images/ProjSS1.png'
import screenshot2 from '../images/ProjSS2.png'
import screenshot3 from '../images/ProjSS3.png'


function Projects() {
  return (
    <section className="projectsSection">
      
        <h1>Projects</h1>
        <hr></hr>
     
      <div className='projectsList'>
        {/* <div className='row'> */}
          <div className='projectCard'>

            <img src={screenshot} alt="Day Planner" className="project-image" />

            <div className='projectCard-body'>

              <h3 className='projectCard-title'>Day Planner</h3>
              <p className='projectCard-text'>A day planning application that help users manage their time, and efficiently achieve their goals.
              </p>
              <p className='projectCard-text'>
                Tools: HTML, CSS, JavaScript, Bootstrap, FontAwsome.
              </p>
              <p className='projectCard-text'>Link: <a href='https://wlomac.github.io/Planner/'>https://wlomac.github.io/Planner/</a></p>
            </div>
          </div>
          <div className='projectCard'>

            <img src={screenshot2} alt="Weather Forecast" className="project-image" />

            <div className='projectCard-body'>
              <h3 className='projectCard-title'>Weather Forecast</h3>
              <p className='projectCard-text'>A weather forecast application which provides users with up-to-date weather information and five days forecast for specified localisation.
              </p>
              <p className='projectCard-text'>
                Tools: HTML, CSS, JavaScript, Bootstrap, FontAwsome, Rest API.
              </p>
              <p className='projectCard-text'>Link: <a href='https://wlomac.github.io/Weather-Forecast'>https://wlomac.github.io/Weather-Forecast</a></p>
            </div>
          </div>
          <div className='projectCard'>

            <img src={screenshot3} alt="Readme Generator" className="project-image" />

            <div className='projectCard-body'>

              <h3 className='projectCard-title'>Readme.md Generator</h3>
              <p className='projectCard-text'>Readme.md Generator is a tool for developers, designed to simplify process of creating README.md file.
              </p>
              <p className='projectCard-text'>
                Tools: HTML, JavaScript, NODE.js.
              </p>
              <p className='projectCard-text'>Link: <a href='https://github.com/WloMac/Readme-Generator'> https://github.com/WloMac/Readme-Generator</a></p>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
}

export default Projects;
