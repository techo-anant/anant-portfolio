import '../styles/Projects.css';
import React from 'react';
import { FaGithub, FaDesktop  } from "react-icons/fa";
import { projects, upcoming } from '../constants/project.js'
import { FaD } from 'react-icons/fa6';

const Projects = React.forwardRef((_, ref) => {

    return (
        <div ref={ref} className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.desc.map((bullets, index) => (
                            <p key={index} className="project-bullets">{bullets}</p>
                        ))}</p>
                        <div className='linker'>
                            <a href={project.link} target="_blank" rel="noreferrer"><FaGithub /> View Code</a>
                            {project.demo && (
                                <a href={project.demo} target="_blank" rel="noreferrer"><FaDesktop />Live Demo</a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <h1>Upcoming Projects</h1>
            <div className="project-list">
                {upcoming.map((project, index) => (
                    <div className="project" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.desc.map((bullets, index) => (
                            <p key={index} className="project-bullets">{bullets}</p>
                        ))}</p>
                        <a href={project.link} target="_blank" rel="noreferrer"><FaGithub /> View Code</a>
                    </div>
                ))}
            </div>
        </div>
    )
});

export default Projects;