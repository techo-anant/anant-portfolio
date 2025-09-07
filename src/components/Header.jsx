import React from 'react';
import '../styles/Header.css'; // Add custom styles in this file
import { useState } from 'react';
import { RxDropdownMenu } from "react-icons/rx";

const Header = ({ scrollToAbout, scrollToDocument, scrollToEducation, scrollToLanguages, scrollToExperience, scrollToProjects, scrollToContact, documentSearch }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      document.querySelector(".dropdown-content").style.display = "block";
    } else {
      document.querySelector(".dropdown-content").style.display = "none";
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      toggleMenu();
    }
  }


  return (
    <header className="navbar">
      <div id="dropdown">
        <div
          role="button"
          tabIndex={0}
          onKeyDown={handleKeyDown}
          className="menu"
          onClick={toggleMenu}
        >
          <RxDropdownMenu />
        </div>
        <div className="dropdown-content">
          <ul className="dp-box">
            <a onClick={() => {
              scrollToAbout();
              toggleMenu();
            }
            }>
              <li>About Me</li>
            </a>
            <a onClick={() => {
              scrollToEducation();
              toggleMenu();
            }
            }>
              <li>Education</li>
            </a>
            <a onClick={() => {
              scrollToLanguages();
              toggleMenu();
            }
            }><li>Languages</li></a>
            <a onClick={() => {
              scrollToExperience();
              toggleMenu();
            }
            }><li>Work Experience</li></a>
            <a onClick={() => {
              scrollToProjects();
              toggleMenu();
            }
            }><li>Projects</li></a>
            <a onClick={() => {
              scrollToDocument();
              toggleMenu();
              documentSearch();
            }
            }>
              <li>Documents</li>
            </a>
            <a onClick={() => {
              scrollToContact();
              toggleMenu();
            }
            }>
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="bar-item">
        <div className="nav-item" onClick={scrollToAbout}>About Me</div>
        <div className="nav-item" onClick={scrollToEducation}>Languages</div>
        <div className="nav-item" onClick={scrollToExperience}>Experience</div>
        <div className="nav-item" onClick={scrollToProjects}>Projects</div>
        <div className="nav-item" onClick={scrollToContact}>Contacts</div>
      </div>
    </header >
  );
};

export default Header;
