// src/components/Projects.jsx
import React from "react";
import ProjectItem from "./ProjectItem";
import "../css/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Master Patient Index",
      description: [
        "Developed a single-page web application for hospital operations using Vue.js and Laravel, enhancing data efficiency by 30%.",
        "Managed patient and staff information with a MySQL database for improved accessibility.",
        "Automated bill generation and appointment scheduling processes, reducing manual tasks.",
      ],
      techStack: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      id: 2,
      title: "Prepstation",
      description: [
        "Created a web app for online examinations with features like exam creation, result tracking, and profile management.",
        "Built using React.js, Node.js, and JavaScript for a responsive, user-friendly experience.",
        "Implemented robust user and data handling for both students and teachers.",
      ],
      techStack: ["React.js", "Node.js", "JavaScript"],
    },
    {
      id: 3,
      title: "Spendee",
      description: [
        "Designed a budget management app to track expenses, visualize spending patterns, and manage balances.",
        "Included features like calculator access, search options, and graphical spending analysis.",
        "Developed with Java and Android Studio for optimal performance on mobile devices.",
      ],
      techStack: ["Java", "Android Studio"],
    },
    {
      id: 4,
      title: "Lung Cancer Detection",
      description: [
        "Built an application for early detection of lung cancer using a CNN model and high-resolution lung scans.",
        "Achieved an accuracy of 85% on small datasets, aiding in accurate and early cancer detection.",
        "Developed using Python and TensorFlow, utilizing image processing techniques.",
      ],
      techStack: ["Python", "TensorFlow", "CNN"],
    },
    {
      id: 5,
      title: "Blood Stroke Clot",
      description: [
        "Differentiated between major acute ischemic stroke (AIS) subtypes using a CNN model.",
        "Achieved 88% accuracy on a small dataset, assisting healthcare providers in identifying clot origins.",
        "Used Python and machine learning to enhance accuracy and reliability in predictions.",
      ],
      techStack: ["Python", "Machine Learning", "CNN"],
    },
    {
      id: 6,
      title: "Morris Health Service",
      description: [
        "Developed a Health Service Management system with CRUD functionalities for employees and facilities.",
        "Implemented Patient Management for inserting, viewing, and updating patient data.",
        "Generated Management Reports for revenue, appointments, and daily statistics to support decision-making.",
        "Optimized data handling with MySQL and PHPMyAdmin for efficient operations.",
      ],
      techStack: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    },
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projects-list">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
