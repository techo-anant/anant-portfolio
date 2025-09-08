import '../styles/Projects.css';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { projects, upcoming } from '../constants/project.js'

const Projects = React.forwardRef((_, ref) => {

    return (
        <div ref={ref} className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map((project, index) => (
                    <div className="project" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                        <a href={project.link} target="_blank" rel="noreferrer"><FaGithub /> View Code</a>
                    </div>
                ))}
            </div>
            <h1>Upcoming Projects</h1>
            <div className="project-list">
                {upcoming.map((project, index) => (
                    <div className="project" key={index}>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                        <a href={project.link} target="_blank" rel="noreferrer"><FaGithub /> View Code</a>
                    </div>
                ))}
            </div>
        </div>
    )
});

export default Projects;