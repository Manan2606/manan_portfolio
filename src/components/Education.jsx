import React from "react";
import "../Education.css"; // Import the CSS file

const Education = () => {
  const educationList = [
    {
      id: 1,
      institution: "NEW JERSEY INST. OF TECH",
      degree: "M.S. in Computer Science",
      duration: "01/2024 - present",
      gpa: "GPA-4.0 / 4.0",
    },
    {
      id: 2,
      institution: "CHARUSAT UNIVERSITY",
      degree: "B.Tech. in Computer Engineering",
      duration: "07/2019 – 05/2023",
      gpa: "GPA-9.75 / 10.00",
    },
  ];

  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-list">
        {educationList.map((education) => (
          <div key={education.id} className="education-item">
            <h3>{education.institution}</h3>
            <p>{education.degree}</p>
            <p>{education.duration}</p>
            <p>{education.gpa}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
