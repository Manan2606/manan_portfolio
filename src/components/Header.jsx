import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaTerminal, FaUserAlt, FaCode, FaTools, FaEnvelope, FaBriefcase, FaCertificate, FaGraduationCap } from "react-icons/fa";
import "../css/Header.css";

const SCROLL_OFFSET = 120; // Adjusted for floating dock offset

const NAV_LINKS = [
  { id: "about", icon: <FaUserAlt />, label: "About" },
  { id: "experience", icon: <FaBriefcase />, label: "Experience" },
  { id: "projects", icon: <FaCode />, label: "Projects" },
  { id: "education", icon: <FaGraduationCap />, label: "Education" },
  { id: "skills", icon: <FaTools />, label: "Skills" },
  { id: "certifications", icon: <FaCertificate />, label: "Certs" },
  { id: "contact", icon: <FaEnvelope />, label: "Contact" },
];

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleCmdClick = () => {
    window.dispatchEvent(new CustomEvent('openCommandCenter'));
    setActiveTab("cmd");
  };

  return (
    <div className="dock-container">
      <nav className="dock-nav">
        {/* Command Center Button */}
        <button 
          className={`dock-item ${activeTab === 'cmd' ? 'active' : ''}`} 
          onClick={handleCmdClick}
          aria-label="Open Command Center"
        >
          <div className="dock-icon"><FaTerminal /></div>
          <span className="dock-tooltip">Cmd+K</span>
        </button>

        <div className="dock-divider"></div>

        {/* Navigation Links */}
        {NAV_LINKS.map((section) => (
          <Link
            key={section.id}
            to={section.id}
            smooth={true}
            duration={150}
            offset={-SCROLL_OFFSET}
            spy={true}
            activeClass="active"
            className="dock-item"
            onSetActive={() => setActiveTab(section.id)}
          >
            <div className="dock-icon">{section.icon}</div>
            <span className="dock-tooltip">{section.label}</span>
          </Link>
        ))}

        <div className="dock-divider"></div>

        {/* Theme Toggle */}
        <button 
          className="dock-item theme-toggle" 
          onClick={toggleTheme} 
          aria-label="Toggle theme"
        >
          <div className="dock-icon">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </div>
          <span className="dock-tooltip">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
        </button>
      </nav>
    </div>
  );
};

export default Header;
