import { FaArrowRight, FaEnvelope, FaTerminal } from "react-icons/fa";
import "../css/Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleSayHello = (e) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("openAIChat"));
  };

  return (
    <footer className="bento-footer">
      <div className="bento-orb orb-1"></div>
      <div className="bento-orb orb-2"></div>

      <div className="bento-container">
        <div className="bento-grid compact-footer-grid">
          <div className="bento-card bento-hero compact-footer-hero">
            <h3>Let&apos;s discuss <span className="bento-highlight">engineering impact.</span></h3>
            <a href="#chat" onClick={handleSayHello} className="bento-btn">
              Ask Portfolio Assistant <FaArrowRight />
            </a>
          </div>

          <div className="bento-card bento-info compact-footer-info">
            <div className="info-header">
              <FaTerminal /> <span>Contact Info</span>
            </div>
            <ul className="info-list">
              <li>
                <span>Email</span>
                <a href="mailto:mananshah2602@gmail.com"><FaEnvelope /> mananshah2602@gmail.com</a>
              </li>
              <li>
                <span>Phone</span>
                <a href="tel:+15513288691">+1 (551)-328-8691</a>
              </li>
              <li>
                <span>Work Authorization</span>
                <p>U.S. Permanent Resident</p>
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
