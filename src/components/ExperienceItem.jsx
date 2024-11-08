import React from "react";
import "../Experience.css"; // Import the new CSS file

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experience-item">
      <h3>{experience.title}</h3>
      <p className="experience-company">{experience.company}</p>
      <p className="experience-duration">{experience.duration}</p>
      <p className="experience-description">{experience.description}</p>
    </div>
  );
};

export default ExperienceItem;
