import React, { useState, useEffect } from "react";
import "../css/Header.css";
import Logo from "../Logo.png";
import { Link } from "react-scroll";

const SCROLL_OFFSET = 88; // Keep in sync with --header-height in theme.css

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
        <img src={Logo} alt="Logo" className="logo" />
        <nav className="nav-links">
          {["About", "Projects", "Skills", "Contact"].map((section) => (
            <Link
              key={section}
              to={section.toLowerCase()} // Ensure the target matches the section ID
              smooth={true}
              duration={500}
              offset={-SCROLL_OFFSET}
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
