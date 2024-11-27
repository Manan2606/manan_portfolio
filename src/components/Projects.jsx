// src/components/Projects.jsx
import React from "react";
import ProjectItem from "./ProjectItem";
import "../css/Projects.css";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Prepstation",
      description: [
        "Created a web app for online examinations with features like exam creation, result tracking, and profile management.",
        "Built using React.js, Node.js, and JavaScript for a responsive, user-friendly experience.",
        "Implemented robust user and data handling for both students and teachers.",
      ],
      techStack: ["React.js", "Node.js", "JavaScript"],
    },
    {
      id: 2,
      title: "Spendee",
      description: [
        "Designed a budget management app to track expenses, visualize spending patterns, and manage balances.",
        "Included features like calculator access, search options, and graphical spending analysis.",
        "Developed with Java and Android Studio for optimal performance on mobile devices.",
      ],
      techStack: ["Java", "Android Studio"],
    },
    {
      id: 3,
      title: "Lung Cancer Detection",
      description: [
        "Built an application for early detection of lung cancer using a CNN model and high-resolution lung scans.",
        "Achieved an accuracy of 85% on small datasets, aiding in accurate and early cancer detection.",
        "Developed using Python and TensorFlow, utilizing image processing techniques.",
      ],
      techStack: ["Python", "TensorFlow", "CNN"],
    },
    {
      id: 4,
      title: "Blood Stroke Clot",
      description: [
        "Differentiated between major acute ischemic stroke (AIS) subtypes using a CNN model.",
        "Achieved 88% accuracy on a small dataset, assisting healthcare providers in identifying clot origins.",
        "Used Python and machine learning to enhance accuracy and reliability in predictions.",
      ],
      techStack: ["Python", "Machine Learning", "CNN"],
    },
    {
      id: 5,
      title: "Morris Health Service",
      description: [
        "Developed a Health Service Management system with CRUD functionalities for employees and facilities.",
        "Implemented Patient Management for inserting, viewing, and updating patient data.",
        "Generated Management Reports for revenue, appointments, and daily statistics to support decision-making.",
        "Optimized data handling with MySQL and PHPMyAdmin for efficient operations.",
      ],
      techStack: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    },
    {
      id: 6,
      title: "Analysis of Climate Weather Surface of Brazil Hourly with Hadoop",
      description: [
        "Analyzed large-scale weather data from the southeastern region of Brazil to explore key patterns in temperature, humidity, and wind.",
        "The dataset, sourced from Kaggle, provided hourly weather data across multiple stations, which was processed using Hadoop MapReduce to answer critical questions regarding temperature trends, humidity-dew point correlation, and wind patterns.",
        "Data Analysis: Developed MapReduce jobs to analyze dry bulb temperature, relative humidity, dew point, and wind speed variations over time.",
        "Performance Optimization: Improved job execution times by optimizing memory allocation, using parallel processing, and adjusting resource allocation.",
      ],
      techStack: ["Java", "Hadoop", "HDFS", "Oozie", "Python"],
    },
    {
      id: 7,
      title: "Automated Web Scraping and Analysis of Journal Articles",
      description: [
        "Automated the scraping and analysis of journal articles from Mobile DNA Journal to gather information such as titles, authors, abstracts, publication dates, keywords, and corresponding authors.",
        "Implemented helper functions for extracting article metadata and visualizing publication trends, author contributions, and keyword frequency.",
        "Designed publication trend analysis and keyword frequency visualizations using `ggplot2` and `viridis`.",
        "Preprocessed and cleaned datasets to remove duplicates, handle missing values, and ensure reliable analysis.",
        "Saved processed data to CSV for seamless sharing and further use.",
      ],
      techStack: ["R", "rvest", "dplyr", "ggplot2", "stringr", "tidyr"],
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
