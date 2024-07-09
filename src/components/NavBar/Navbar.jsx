import React from "react";
import { useState } from "react";
import MobileNav from "../MobileNav/MobileNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import pdf from "../../assets/resume.pdf";

function NavBar({ scrollToSection, skills, home, projects, contactMe }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  // function handleButton() {
  //   const pdfUrl = "Chiranth_Narataj.pdf";

  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "Chiranth_Nataraj.pdf";
  //   link.click();
  // }
  return (
    <>
      <MobileNav
        isOpen={isOpen}
        toggleMenu={toggleMenu}
        scrollToSection={scrollToSection}
        skills={skills}
        home={home}
        projects={projects}
        contactMe={contactMe}
      />
      <nav className="nav-wrapper">
        <div className="nav-content">
          {/* <img className="" src="" alt="" /> */}
          <h1>Chiranth </h1>
          <ul>
            <li onClick={() => scrollToSection(home)}>
              <a className="menu-item">Home</a>
            </li>
            <li onClick={() => scrollToSection(skills)}>
              <a className="menu-item">Skills</a>
            </li>
            <li onClick={() => scrollToSection(projects)}>
              <a className="menu-item">Projects</a>
            </li>
            <li onClick={() => scrollToSection(contactMe)}>
              <a className="menu-item">Contact Me</a>
            </li>
            <a href={pdf} download="Resume-PDF" rel="noreferrer">
              <button className="contact-btn">
                <span>
                  <FontAwesomeIcon icon={faDownload} /> Resume
                </span>
              </button>
            </a>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "1.8rem" }}
            >
              {isOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
}
export default NavBar;
