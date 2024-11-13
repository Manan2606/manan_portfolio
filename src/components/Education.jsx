// src/components/Education.jsx
import React from "react";
import "../css/Education.css";
import { FaUniversity } from "react-icons/fa";

const Education = () => {
  const educationList = [
    {
      id: 1,
      institution: "NEW JERSEY INST. OF TECH",
      degree: "M.S. in Computer Science",
      duration: "01/2024 - Present",
      gpa: "GPA-4.0 / 4.0",
      coursework: [
        "Data Structure and Algorithms",
        "Machine Learning",
        "Cloud Computing",
        "Database Management System",
        "Operating System",
      ],
    },
    {
      id: 2,
      institution: "CHARUSAT UNIVERSITY",
      degree: "B.Tech. in Computer Engineering",
      duration: "07/2019 – 05/2023",
      gpa: "GPA-9.75 / 10.00",
      coursework: [
        "Operating Systems",
        "Database Management",
        "Theory of Computation",
        "Software Engineering",
        "Artificial Intelligence",
        "Design and Analysis of Algorithms",
      ],
    },
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-timeline">
        {educationList.map((education) => (
          <div key={education.id} className="education-item">
            <span className="education-icon">
              <FaUniversity />
            </span>
            <div className="education-content">
              <h3>{education.institution}</h3>
              <p className="degree">{education.degree}</p>
              <p className="duration">{education.duration}</p>
              <p className="gpa">{education.gpa}</p>
              <ul className="coursework-list">
                {education.coursework.map((course, index) => (
                  <li key={index} className="coursework-item">
                    {course}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
