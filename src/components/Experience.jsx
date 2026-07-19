import { useState } from "react";
import { FaCalendarAlt, FaBuilding, FaBullseye, FaChevronDown } from "react-icons/fa";
import "../css/Experience.css";

const Experience = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scrollStates, setScrollStates] = useState({});

  const handleScroll = (index, e) => {
    const isScrolled = e.target.scrollTop > 10;
    setScrollStates((prev) => ({ ...prev, [index]: isScrolled }));
  };

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const experiences = [
    {
      id: 0,
      title: "Application Consultant / Software Engineer",
      company: "Capgemini",
      duration: "Feb 2026 - Present",
      isCurrent: true,
      description: [
        "Delivered Dialogflow CX enhancements and production defect fixes for an enterprise CCaaS platform, tracing parameter lifecycles across 10+ pages and routes.",
        "Investigated call routing across Dialogflow CX, webhooks, API/database calls, and cloud logs; contributed optimizations that reduced average call latency by about 3 seconds per call.",
        "Supported backend, observability, and release validation using Python, Cloud Run, Cloud Logging, BigQuery, Looker, Confluence, and Visio process maps.",
      ],
      impact: "Improved routing accuracy, reduced latency, and strengthened release validation for enterprise customer-care workflows.",
      technologies: ["Dialogflow CX", "Python", "Cloud Run", "BigQuery", "Cloud Logging", "Looker"],
    },
    {
      id: 1,
      title: "SOFTWARE ENGINEER",
      company: "H2 Techno World",
      duration: "Sep 2024 - May 2025",
      description: [
        "Designed and developed a full-stack inventory and order management platform with React.js, FastAPI, and PostgreSQL across product, inventory, order, access, and audit/reporting modules.",
        "Built RESTful backend services with normalized PostgreSQL schemas across 8 core entities and implemented audit/validation workflows for 4 event categories.",
        "Automated Docker-based deployments through GitHub Actions and AWS EC2, reducing release execution from 7 manual tasks to a 3-stage workflow."
      ],
      impact: "Reduced release friction while improving operational visibility for inventory and order workflows.",
      technologies: ["React.js", "FastAPI", "PostgreSQL", "Docker", "AWS EC2", "GitHub Actions"],
    },
    {
      id: 2,
      title: "SOFTWARE ENGINEER",
      company: "H2 Techno World",
      duration: "Jul 2023 - Sep 2023",
      description: [
        "Designed and implemented a comprehensive tax invoice system with itemized invoice generation.",
        "Enabled reprinting of invoices for specific time periods, enhancing user accessibility. Integrated secure user authentication, including login/logout functionality.",
        "Developed an automated email notification system using JavaScript and PHP to send invoices to submitted email IDs, reducing manual handling by 25%."
      ],
      impact: "Enhanced usability and security for invoice workflows.",
      technologies: ["PHP", "JavaScript", "MySQL"],
    },
    {
      id: 3,
      title: "FULL-STACK DEVELOPER INTERN",
      company: "Crown Software",
      duration: "Dec 2022 - May 2023",
      description: [
        "Developed and enhanced 7 MDHostel platform modules covering leave requests, complaints, guest management, attendance, food services, room allocation, and meal workflows.",
        "Led SQL-focused backend work after 3 months by debugging and optimizing PHP-integrated database queries across student management workflows.",
        "Contributed through daily Agile standups, GitHub-based version control, and collaborative feature development.",
      ],
      impact: "Improved hostel operations across resident, staff, and administration workflows.",
      technologies: ["PHP", "JavaScript", "AJAX", "Bootstrap", "SQL"],
    },
    {
      id: 4,
      title: "WEB DEVELOPER",
      company: "NAVPAD INFOTECH",
      duration: "May 2022 - Jul 2022",
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
      duration: "May 2021 - Jul 2021",
      hideScroll: true,
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
      <p className="exp-subtitle">Select a role to review measurable engineering impact.</p>

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
              <div className="slice-vertical-title">
                <span className="vertical-company">
                  {exp.company}
                  {exp.isCurrent && <span className="vertical-pulse"></span>}
                </span>
              </div>

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
