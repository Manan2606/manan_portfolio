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
      color: "#ff003c", // Cyberpunk Neon Red/Pink
      coursework: [
        "Data Structure & Algorithms",
        "Machine Learning",
        "Cloud Computing",
        "Database Management",
        "Operating Systems",
      ],
    },
    {
      id: "charusat",
      institution: "CHARUSAT UNIVERSITY",
      degree: "B.Tech in Computer Engineering",
      duration: "07/2019 – 05/2023",
      gpa: "3.92 / 4.00",
      icon: <FaServer />, 
      color: "#00ccff", // Cyberpunk Neon Blue
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
      <h2 id="education-heading" className="neural-heading">Knowledge Network</h2>
      <p className="neural-subtitle">Hover over a core node to initialize data pulse.</p>

      <div className="neural-network-container">
        
        {/* Central glowing spine that connects the whole network */}
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
              
              {/* Data Readout (Degree Info) */}
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

              {/* The Core University Node */}
              <div className={`core-node-wrapper ${activeNode === edu.id ? 'active' : ''}`}>
                <div className="core-node">
                  <div className="core-icon">{edu.icon}</div>
                  {/* Glowing rings */}
                  <div className="core-pulse-ring"></div>
                  <div className="core-pulse-ring delay"></div>
                </div>
              </div>

              {/* Connecting Synapses to Coursework */}
              <div className={`synapse-branches ${activeNode === edu.id ? 'pulsing' : ''}`}>
                {edu.coursework.map((course, idx) => (
                  <div 
                    key={idx} 
                    className="branch-path"
                    style={{ '--branch-index': idx }} // Used for staggered CSS transition delays
                  >
                    {/* The Course Node */}
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
