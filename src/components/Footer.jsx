import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaTerminal } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSayHello = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("openAIChat"));
  };

  return (
    <footer className="bento-footer">
      {/* Decorative Background Orbs */}
      <div className="bento-orb orb-1"></div>
      <div className="bento-orb orb-2"></div>

      <div className="bento-container">
        <div className="bento-grid">
          
          {/* Hero Card */}
          <div className="bento-card bento-hero">
            <h3>Let's build something <span className="bento-highlight">extraordinary.</span></h3>
            <a href="#chat" onClick={handleSayHello} className="bento-btn">
              Say Hello <FaArrowRight />
            </a>
          </div>

          {/* Social Cards */}
          <a href="https://github.com/Manan2606" target="_blank" rel="noopener noreferrer" className="bento-card bento-social github-card">
            <div className="bento-social-icon"><FaGithub /></div>
            <div className="bento-social-text">
              <span>Explore Code</span>
              <strong>GitHub</strong>
            </div>
            <FaArrowRight className="bento-arrow" />
          </a>

          <a href="https://www.linkedin.com/in/manan-shah-b5376420b/" target="_blank" rel="noopener noreferrer" className="bento-card bento-social linkedin-card">
            <div className="bento-social-icon"><FaLinkedin /></div>
            <div className="bento-social-text">
              <span>Connect</span>
              <strong>LinkedIn</strong>
            </div>
            <FaArrowRight className="bento-arrow" />
          </a>

          {/* Contact Direct Card */}
          <div className="bento-card bento-info">
            <div className="info-header">
              <FaTerminal /> <span>Contact Info</span>
            </div>
            <ul className="info-list">
              <li>
                <span>Email</span>
                <a href="mailto:mananshah2602@gmail.com">mananshah2602@gmail.com</a>
              </li>
              <li>
                <span>Phone</span>
                <a href="tel:+15513288691">+1 (551)-328-8691</a>
              </li>
              <li>
                <span>Location</span>
                <p>Nashville, TN</p>
              </li>
            </ul>
          </div>

        </div>

        <div className="bento-bottom">
          <p>&copy; {currentYear} Manan Shah. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
