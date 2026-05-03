import React, { useState } from "react";
import { FaCalendarAlt, FaBuilding, FaBullseye, FaStar, FaChevronDown } from "react-icons/fa";
import "../css/Experience.css";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Capgemini is active by default
  const [scrollStates, setScrollStates] = useState({});

  const handleScroll = (index, e) => {
    // If scrolled down more than 10px, hide the arrow
    const isScrolled = e.target.scrollTop > 10;
    setScrollStates((prev) => ({ ...prev, [index]: isScrolled }));
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const experiences = [
    {
      id: 0,
      title: "Associate Application Consultant",
      company: "Capgemini",
      duration: "Feb 2026 – Present",
      isCurrent: true,
      description: [
        "Architecting and delivering cloud and AI-driven solutions for an enterprise client, leveraging Dialogflow CX, Spring Boot, BigQuery, Cloud Logging, and MongoDB to build intelligent, scalable systems.",
        "Driving end-to-end technical ownership across cloud infrastructure and AI integrations, while actively pursuing Google Associate Cloud Engineer certification to deepen platform expertise.",
        "Evolved beyond engineering into a consulting role by leading cross-functional team collaborations, owning client-facing presentations, and translating complex technical solutions into clear business outcomes.",
      ],
      impact: "Building the invisible backbone that makes every customer conversation smarter, faster, and more human.",
      technologies: ["Dialogflow CX", "Spring Boot", "BigQuery", "Cloud Logging", "MongoDB", "GCP"],
    },
    {
      id: 1,
      title: "SOFTWARE ENGINEER",
      company: "H2 Techno World",
      duration: "Sep 2024 – May 2025",
      description: [
        "Designed and deployed a production-grade full-stack inventory and order management platform for SMBs using React.js, FastAPI, and MySQL - featuring multi-level role-based access and a responsive UI that consolidated manual audits by 30%, enabling predictive decision-making for supply chain operations.",
        "Architected containerized microservices with Docker and engineered programmatically triggered CI/CD pipelines via GitHub Actions, streamlining deployments and ensuring consistent, reliable delivery across environments",
        "Deployed highly available, scalable services on AWS EC2 with minimal downtime, supporting smooth version rollouts and production-grade reliability for end users."
      ],
      impact: "Delivered scalable and automated cloud solutions for inventory management.",
      technologies: ["React.js", "FastAPI", "MySQL", "Docker", "AWS", "GitHub Actions"],
    },
    {
      id: 2,
      title: "SOFTWARE ENGINEER",
      company: "H2 Techno World",
      duration: "Jul 2023 – Sep 2023",
      description: [
        "Designed and implemented a comprehensive tax invoice system with itemized invoice generation.",
        "Enabled reprinting of invoices for specific time periods, enhancing user accessibility. Integrated secure user authentication, including login/logout functionality.",
        "Developed an automated email notification system using JavaScript and PHP to send invoices to submitted email IDs, reducing manual handling by 25%"
      ],
      impact: "Enhanced usability and security.",
      technologies: ["PHP", "JavaScript", "MySQL"],
    },
    {
      id: 3,
      title: "SOFTWARE DEVELOPER",
      company: "Crown Software",
      duration: "Dec 2022 – May 2023",
      description: [
        "Led optimization of SQL databases and API operations for MDHostel, reducing query times by 40%.",
        "Built responsive, user-friendly webpages, increasing user engagement by 30%.",
        "Developed core modules like Attendance, Complaint, Fees, Food, and Leave, streamlining hostel operations for 500+ residents.",
      ],
      impact: "Improved database efficiency and user engagement.",
      technologies: ["PHP", "JavaScript", "AJAX", "SQL"],
    },
    {
      id: 4,
      title: "WEB DEVELOPER",
      company: "NAVPAD INFOTECH",
      duration: "May 2022 – Jul 2022",
      description: [
        "Developed a single-page hospital web app using Vue.js and Laravel, reducing manual data entry by 30%.",
        "Used MySQL to manage patient and staff information, schedule appointments, and generate bills.",
        "Enhanced data accessibility and streamlined tracking for hospital operations.",
      ],
      impact: "Streamlined hospital operations.",
      technologies: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      id: 5,
      title: "FRONTEND DEVELOPER",
      company: "Sannibh Technology",
      duration: "May 2021 – Jul 2021",
      hideScroll: true, // Explicitly hide scroll for this short card
      description: [
        "Created a responsive consulting website using HTML, CSS, and JavaScript, boosting user engagement.",
        "Integrated service pages for consulting, improving user navigation and experience.",
        "Streamlined service offerings for better accessibility and usability.",
      ],
      impact: "Improved user engagement and accessibility.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="exp-main-heading">Professional Journey</h2>
      <p className="exp-subtitle">Hover to expand roles and reveal engineering impact.</p>

      <div className="accordion-container">
        {experiences.map((exp, index) => {
          const isActive = activeIndex === index;
          return (
            <div 
              key={exp.id} 
              className={`accordion-slice ${isActive ? 'active' : ''} ${exp.isCurrent ? 'current-role' : ''}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onFocus={() => handleMouseEnter(index)}
              tabIndex={0}
              aria-expanded={isActive}
            >
              {/* Vertical Title for compressed state */}
              <div className="slice-vertical-title">
                <span className="vertical-company">
                  {exp.company}
                  {exp.isCurrent && <span className="vertical-pulse"></span>}
                </span>
              </div>

              {/* Full Content for expanded state */}
              <div className="slice-content-wrapper">
                <div className="slice-content">
                  <div className="slice-header">
                    <h3 className="slice-role">
                      {exp.title}
                      {exp.isCurrent && (
                        <span className="current-badge">
                          <span className="current-pulse"></span>
                          Current
                        </span>
                      )}
                    </h3>
                    <div className="slice-meta">
                      <span className="meta-item"><FaBuilding className="meta-icon"/> {exp.company}</span>
                      <span className="meta-item"><FaCalendarAlt className="meta-icon"/> {exp.duration}</span>
                    </div>
                  </div>

                  <div className="slice-body" onScroll={(e) => handleScroll(index, e)}>
                    <ul className="slice-description">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                    
                    <div className="slice-impact">
                      <FaBullseye className="impact-icon" />
                      <p><strong>Impact:</strong> {exp.impact}</p>
                    </div>

                    <div className="slice-tech-stack">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="tech-pill">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Scroll Indicator Arrow */}
                  {!exp.hideScroll && (
                    <div className={`scroll-indicator ${scrollStates[index] ? 'hidden' : ''}`}>
                      <span className="scroll-text">Scroll</span>
                      <FaChevronDown className="scroll-arrow" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
