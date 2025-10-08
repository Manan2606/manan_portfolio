import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "../css/Header.css";
import Logo from "../Logo.png";

const SCROLL_OFFSET = 88; // Keep in sync with --header-height in theme.css

const NAV_LINKS = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1YbcfJ7SlviOGHwPQdEcg8sk5HwKWPahK/view?usp=sharing";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-content">
        <button
          className="brand"
          type="button"
          onClick={() => {
            handleNavClick();
            scroll.scrollToTop({ smooth: true, duration: 500 });
          }}
          aria-label="Back to top"
        >
          <img src={Logo} alt="Logo" className="logo" />
          <div className="brand-copy">
            <span className="brand-title">Manan Patel</span>
            <span className="brand-subtitle">Building experiences with code</span>
          </div>
        </button>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {NAV_LINKS.map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              offset={-SCROLL_OFFSET}
              spy={true}
              activeClass="active"
              className="nav-link"
              onClick={handleNavClick}
            >
              {section.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-SCROLL_OFFSET}
            spy={true}
            activeClass="active"
            className="nav-link nav-link-contact"
            onClick={handleNavClick}
          >
            Contact
          </Link>
          <a
            className="cta-link"
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
          >
            View Résumé
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
