// src/components/ProjectItem.jsx
import React from "react";

const ProjectItem = ({ project }) => {
  return (
    <div className="project-item">
      <h3>{project.title}</h3>
      <ul className="project-description">
        {project.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
      <div className="tech-stack">
        {project.techStack.map((tech, index) => (
          <span key={index} className="tech-item">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectItem;
