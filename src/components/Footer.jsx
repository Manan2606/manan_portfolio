// src/components/Footer.jsx
import React, { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaUser,
  FaCode,
  FaCertificate,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-grid">
          {/* Contact Information */}
          <div className="footer-section contact-info">
            <h3>Contact</h3>
            <div className="contact-item">
              <FaEnvelope className="footer-icon" aria-hidden="true" />
              <a href="mailto:mananshah2602@gmail.com" className="footer-link">
                mananshah2602@gmail.com
              </a>
            </div>
            <div className="contact-item">
              <FaPhone className="footer-icon" aria-hidden="true" />
              <a href="tel:+15513288691" className="footer-link">
                +1 (551)-328-8691
              </a>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="footer-icon" aria-hidden="true" />
              <span>Jersey City, NJ</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <nav aria-label="Footer navigation">
              <ul>
                <li>
                  <a
                    href="#about"
                    className="footer-link"
                    onClick={(e) => scrollToSection(e, "about")}
                  >
                    <FaUser className="footer-icon" aria-hidden="true" />
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#projects"
                    className="footer-link"
                    onClick={(e) => scrollToSection(e, "projects")}
                  >
                    <FaCode className="footer-icon" aria-hidden="true" />
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#certifications"
                    className="footer-link"
                    onClick={(e) => scrollToSection(e, "certifications")}
                  >
                    <FaCertificate className="footer-icon" aria-hidden="true" />
                    Certifications
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="footer-link"
                    onClick={(e) => scrollToSection(e, "contact")}
                  >
                    <FaEnvelopeOpenText
                      className="footer-icon"
                      aria-hidden="true"
                    />
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Social Links */}
          <div className="footer-section social-links">
            <h3>Connect</h3>
            <div className="social-icons">
              <a
                href="https://github.com/Manan2606"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Visit my GitHub profile"
              >
                <FaGithub className="footer-icon" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/manan-shah-b5376420b/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Visit my LinkedIn profile"
              >
                <FaLinkedin className="footer-icon" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p>&copy; {currentYear} Manan Shah. All rights reserved.</p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          className="scroll-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <FaArrowUp className="scroll-top-icon" aria-hidden="true" />
        </button>
      )}
    </footer>
  );
};

export default Footer;
