import React from "react";
import { FaCircle, FaStar, FaTools } from "react-icons/fa"; // Import chosen icons
import "../css/Experience.css";

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experience-item">
      <h3>{experience.title}</h3>
      <p className="experience-company">{experience.company}</p>
      <p className="experience-duration">{experience.duration}</p>

      <div className="experience-description">
        <h4>Description:</h4>
        {experience.description.map((item, index) => (
          <div key={index} className="description-item">
            <FaCircle className="icon" /> <span>{item}</span>
          </div>
        ))}
      </div>

      <p className="experience-impact">
        <FaStar className="impact-icon" /> {/* Star icon for impact */}
        <strong>Impact:</strong> {experience.impact}
      </p>

      <div className="experience-technologies">
        <FaTools className="tech-icon" /> {/* Tools icon for technologies */}
        <strong>Technologies Used:</strong>
        <div className="technology-list">
          {experience.technologies.map((tech, index) => (
            <span key={index} className="technology-item">
              {tech}
              {index < experience.technologies.length - 1 && (
                <span className="separator"></span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;
