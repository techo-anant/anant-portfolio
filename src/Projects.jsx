import './Projects.css';
import React from 'react';
import { FaGithub } from "react-icons/fa";

const Projects = React.forwardRef((_, ref) => {

    const projects = [
        { id: 1, title: "Text Editor", desc: "Designed and implemented a fully functional text editor using Java and Swing, included features such as text formatting, file saving, and opening with a user-friendly graphical interface", link: "https://github.com/techo-anant/Projects/blob/main/TextEditor/textEditor.java" },
        { id: 2, title: "Command Line Chess Game", desc: "Coded a command-line chess game in C, implementing piece movement, turn-based gameplay, and game state management, while handling user inputs and displaying theboard as a 2D-char-array", link: "https://github.com/techo-anant/Projects/blob/main/Command_Line_Chess/chess.c" },
        { id: 3, title: "Tic-Tac-Toe", desc: "Developed a fully interactive Tic-Tac-Toe game using Java and Swing, incorporating a responsive GUI and logic for single-player and multiplayer gameplay", link: "https://github.com/techo-anant/Projects/blob/main/TicTacToe/tttJframe.java" },
        { id: 4, title: "Server-Client", desc: "Developed a server-client system in Java to receive multiple files sequentially from a single client, ensuring reliable file transfer and processing", link: "https://github.com/techo-anant/Projects/blob/main/ServerClient/ServerClient.java" }
    ];

    const upcoming = [
        { id: 1, title: "Bring me the Files", desc: "Implemented a server-client file transfer system in Java using multithreading, enabling simultaneous file uploads from multiple clients efficiently", link: "Currently Working on it" },
    ];

    return (
        <div ref={ref} className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map((project) => (
                    <div className="project" key={project.id}>
                        <h2>{project.title}</h2>
                        <p>{project.desc}</p>
                        <a href={project.link} target="_blank" rel="noreferrer"><FaGithub /> View Code</a>
                    </div>
                ))}
            </div>
            <h1>Upcoming Projects</h1>
            <div className="project-list">
                {upcoming.map((project) => (
                    <div className="project" key={project.id}>
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