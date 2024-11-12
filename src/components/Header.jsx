// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import "../css/Header.css";
import Logo from "../Logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <div className="header-left">
          <img src={Logo} alt="Logo" className="logo" />
        </div>
        <nav className="nav-links">
          {["Home", "About", "Projects", "Skills", "Contact"].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              {section}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
