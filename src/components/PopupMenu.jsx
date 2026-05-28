import { useLocation } from "react-router-dom";

import resumeIcon from "../assets/ResumeIcon.png";
import githubIcon from "../assets/GitHub.png";
import linkedinIcon from "../assets/LinkedIN.png";
import emailIcon from "../assets/Email.png";
import "../css/Navbar.css";

function PopupMenu({ toggleMenu, menuOpen, menuItems = [] }) {
  if (!menuOpen) return null;

  return (
    <div id="overlay" className="overlay" onClick={toggleMenu}>
      <div
        id="popup-menu"
        className="popup-menu"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="links">

          {/* always home */}
          <a href="/" onClick={(e) => {
              e.preventDefault();
              toggleMenu();
              // Smooth scroll to top of page
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Home
          </a>

          {/* dynamic links */}
          {menuItems.map((item, i) => (
            <a key={i} href={item.href} onClick={(e) => {
                e.preventDefault();
                toggleMenu();
                
                // 1. Remove the '#' from the href string (e.g. "#projects" becomes "projects")
                const targetId = item.href.replace("#", ""); 
                
                // 2. Find the element matching the actual section ID
                const element = document.getElementById(targetId);
                
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {item.label}
            </a>
          ))}

        </div>

        <div className="icons" style={{ paddingBottom: "50px" }}>
          <a href="MatthewHolzerResume.pdf" target="_blank" rel="noopener noreferrer">
            <div className="iconContainer">
              <img src={resumeIcon} alt="Resume Icon" />
            </div>
          </a>

          <a href="https://github.com/Matthew0314" target="_blank" rel="noopener noreferrer">
            <div className="iconContainer">
              <img src={githubIcon} alt="GitHub Icon" />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/matthewholzer314/" target="_blank" rel="noopener noreferrer">
            <div className="iconContainer">
              <img src={linkedinIcon} alt="LinkedIn Icon" />
            </div>
          </a>

          <a href="mailto:matthewh314@gmail.com">
            <div className="iconContainer">
              <img src={emailIcon} alt="Email Icon" />
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}

export default PopupMenu;