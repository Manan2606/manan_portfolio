// src/components/Education.jsx
import React from "react";
import "../css/Education.css";
import {
  FaUniversity,
  FaGraduationCap,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

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
      gpa: "GPA-3.92 / 4.00",
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
      <h1>Education</h1>
      <div className="education-grid">
        {educationList.map((education) => (
          <div key={education.id} className="education-card">
            <div className="education-card-header">
              <div className="institution-icon">
                <FaUniversity />
              </div>
              <div className="institution-info">
                <h3>{education.institution}</h3>
                <div className="degree-info">
                  <FaGraduationCap className="degree-icon" />
                  <span>{education.degree}</span>
                </div>
              </div>
            </div>

            <div className="education-card-body">
              <div className="education-details">
                <div className="detail-item">
                  <FaCalendarAlt className="detail-icon" />
                  <span>{education.duration}</span>
                </div>
                <div className="detail-item">
                  <FaStar className="detail-icon" />
                  <span>{education.gpa}</span>
                </div>
              </div>

              <div className="coursework-section">
                <h4>Key Courses</h4>
                <div className="coursework-grid">
                  {education.coursework.map((course, index) => (
                    <div key={index} className="course-item">
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
