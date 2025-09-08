import React from 'react';
import '../styles/Header.css'; // Add custom styles in this file
import { useState } from 'react';
import { RxDropdownMenu } from "react-icons/rx";
import { MENU_ITEMS, NAV_ITEMS } from "../constants/menu.js";

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

  const scrollMap = {
    about: scrollToAbout,
    education: scrollToEducation,
    languages: scrollToLanguages,
    experience: scrollToExperience,
    projects: scrollToProjects,
    documents: scrollToDocument,
    contact: scrollToContact
  };


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
            {MENU_ITEMS.map((items, index) => (
              <a
                key={index}
                onClick={() => {
                  scrollMap[items.key]();
                  toggleMenu();
                }}
              >
                <li>{items.title}</li>
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="bar-item">
        {NAV_ITEMS.map((item, index) => (
          <div
            key={index}
            className="nav-item"
            onClick={scrollMap[item.key]}
          >
            {item.title}
          </div>
        ))}
      </div>
    </header >
  );
};

export default Header;
