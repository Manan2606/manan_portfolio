import React from "react";
import ProjectItem from "./ProjectItem";
import "../css/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "PREPSTATION",
      description:
        "Developed a sophisticated web application for online examinations with features for creating digital exam papers, practice papers, result tracking, and detailed profiles for students and teachers. Built using React.js, Node.js, HTML, CSS, and JavaScript.",
    },
    {
      id: 2,
      title: "SPENDEE",
      description:
        "Introducing a Budget Management app for tracking daily expenses and overall balance. It features a user-friendly interface, device calculator access, search options, and graphical representations to visualize spending patterns. Built using JAVA and Android Studio.",
    },
    {
      id: 3,
      title: "Lung Cancer Detection",
      description:
        "This application aims for early detection of lung cancer using a CNN (Convolutional Neural Network) Model. It utilizes a dataset of thousands of high-resolution lung scans to accurately determine cancerous lesions, reducing false positives and providing early access to life-saving interventions.",
    },
    {
      id: 4,
      title: "Stroke Blood Clot",
      description:
        "This model differentiates between the two major acute ischemic stroke (AIS) etiology subtypes: cardiac and large artery atherosclerosis. It helps healthcare providers identify the origins of blood clots in deadly strokes, aiding in better patient care.",
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
