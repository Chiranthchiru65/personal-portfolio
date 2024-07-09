import "./MobileNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

import pdf from "../../assets/resume.pdf";
function MobileNav({
  isOpen,
  toggleMenu,
  scrollToSection,
  skills,
  home,
  projects,
  contactMe,
}) {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          {/* <img className="logo" src="" alt="" /> */}
          <h2>Chiru.co</h2>
          <ul>
            <li onClick={() => scrollToSection(home)}>
              <a className="menu-item">Home</a>
            </li>
            <li onClick={() => scrollToSection(skills)}>
              <a className="menu-item">Skills</a>
            </li>
            <li onClick={() => scrollToSection(projects)}>
              <a className="menu-item">Work Experience</a>
            </li>
            <li onClick={() => scrollToSection(contactMe)}>
              <a className="menu-item">Contact Me</a>
            </li>
            <a href={pdf} download="Resume-PDF" rel="noreferrer">
              <button className="contact-btn">
                <span>
                  <FontAwesomeIcon icon={faDownload} /> resume
                </span>
              </button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
}
export default MobileNav;
