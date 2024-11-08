// src/components/Footer.jsx
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import "../Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <FaEnvelope className="footer-icon" />
          <span>Email: mananshah2602@gmail.com</span>
        </div>
        <div className="footer-section">
          <FaPhone className="footer-icon" />
          <span>Phone: +1 551 328 8691</span>
        </div>
        <div className="footer-section">
          <FaMapMarkerAlt className="footer-icon" />
          <span>Location: Jersey City, NJ</span>
        </div>
        <div className="footer-section">
          <a
            href="https://github.com/Manan2606"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/manan-shah-b5376420b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="footer-icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
