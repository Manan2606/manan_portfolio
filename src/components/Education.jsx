import { useState } from "react";
import { FaServer, FaBrain } from "react-icons/fa";
import "../css/Education.css";

const Education = () => {
  const [activeNode, setActiveNode] = useState(null);

  const educationData = [
    {
      id: "njit",
      institution: "NEW JERSEY INST. OF TECH",
      degree: "M.S. in Computer Science",
      duration: "01/2024 - 05/2025",
      gpa: "3.9 / 4.0",
      icon: <FaBrain />,
      color: "#ff003c",
      coursework: [
        "Data Structures & Algorithms",
        "Machine Learning",
        "Cloud Computing",
        "Database Management",
        "Operating Systems",
      ],
    },
    {
      id: "charusat",
      institution: "CHARUSAT UNIVERSITY",
      degree: "B.E. in Computer Engineering",
      duration: "07/2019 - 05/2023",
      gpa: "9.75 / 10",
      icon: <FaServer />,
      color: "#00ccff",
      coursework: [
        "Software Engineering",
        "Artificial Intelligence",
        "Theory of Computation",
        "Design & Analysis",
        "Programming Languages",
        "Computer Architecture"
      ],
    },
  ];

  return (
    <section id="education" aria-labelledby="education-heading">
      <h2 id="education-heading" className="neural-heading">Education</h2>
      <p className="neural-subtitle">Academic foundation in computer science, cloud computing, and applied AI.</p>

      <div className="neural-network-container">
        <div className="network-spine"></div>

        {educationData.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={edu.id}
              className={`neural-cluster ${isLeft ? 'cluster-left' : 'cluster-right'}`}
              onMouseEnter={() => setActiveNode(edu.id)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ '--node-color': edu.color }}
            >
              <div className="data-readout">
                <div className="readout-glass">
                  <h3 className="readout-title">{edu.institution}</h3>
                  <div className="readout-degree">{edu.degree}</div>
                  <div className="readout-stats">
                    <span className="duration-text">{edu.duration}</span>
                    <span className="gpa-badge" style={{ color: edu.color, borderColor: edu.color }}>GPA {edu.gpa}</span>
                  </div>
                </div>
              </div>

              <div className={`core-node-wrapper ${activeNode === edu.id ? 'active' : ''}`}>
                <div className="core-node">
                  <div className="core-icon">{edu.icon}</div>
                  <div className="core-pulse-ring"></div>
                  <div className="core-pulse-ring delay"></div>
                </div>
              </div>

              <div className={`synapse-branches ${activeNode === edu.id ? 'pulsing' : ''}`}>
                {edu.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="branch-path"
                    style={{ '--branch-index': idx }}
                  >
                    <div className="course-node">
                      <div className="course-dot"></div>
                      <span className="course-name">{course}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
