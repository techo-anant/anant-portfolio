import { useState, useEffect, useRef } from "react";
import { FaFilePdf } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from "react";
import './About.css'

const About = React.forwardRef(({ aboutRef, docxRef }, ref) => {
    const [text, setText] = useState(""); // Current displayed text
    const [index, setIndex] = useState(0); // Current index in the sequence
    const [isDeleting, setIsDeleting] = useState(false); // Whether it is deleting
    const [speed, setSpeed] = useState(200); // Typing speed


    const sequence = ["Hello there,", "I am", "ANANT KUMAR SINGH"]; // Text to display
    const pause = 2000; // Pause before deleting or moving to the next word

    useEffect(() => {
        const currentWord = sequence[index]; // Get the current word from the sequence
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                setText((prev) => currentWord.slice(0, prev.length + 1));
                if (index == 2) {
                    return () => clearTimeout(timeout);
                }
                if (text === currentWord) {
                    setIsDeleting(true);
                    setSpeed(pause); // Pause at the end of a word
                }
            } else {
                // Deleting
                setText((prev) => prev.slice(0, -1));
                if (text === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % sequence.length); // Move to the next word
                    setSpeed(250); // Reset typing speed
                }
            }
        }, isDeleting ? 100 : speed);

        return () => clearTimeout(timeout); // Cleanup timeout
    }, [text, isDeleting, index, sequence, speed]);

    return (
        <div ref={aboutRef} className="about">
            <div className="my-photo">
                <div className="anantPhoto"></div>
            </div>
            <div className="info">
                <span id="name">{text}</span>
                <p id="dscp">A passionate <b>Computer Science and Business Administration</b> student.<br />Exploring for opportunities in the tech world.<br />My portfolio showcases a variety of projects that blend technology and business, including full-stack web development applications, financial models, and software solutions.</p>
                <div className="docx" ref={docxRef} id="docx">
                    <a href="https://drive.google.com/file/d/1EFtkjIKybg4MuSXat_Wf25m3s3TfOHqQ/view?usp=drive_link" target="_blank"><div className="icon" id="resume"><FaFilePdf /></div></a>
                    <a href="https://drive.google.com/file/d/1dxfZkb0fjaE7cGlkcEcWyc_X4SrKM60K/view?usp=drive_link" target="_blank"><div className="icon"><HiOutlineAcademicCap /></div></a>
                    <a href="https://github.com/techo-anant"><div className="icon"><FaGithub /></div></a>
                    <a href="https://www.linkedin.com/in/anantk-singh/"><div className="icon"><FaLinkedin /></div></a>
                    <a href="mailto:singh4n3@uwindsor.ca"><div className="icon"><MdEmail /></div></a>
                </div>
            </div>
        </div>
    );

});

export default About;