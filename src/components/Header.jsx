// src/components/Header.jsx
import React from "react";
import "../Header.css";
import Logo from "../Logo.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <nav className="header-right">
          <ul className="nav-links">
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="nav-link"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
