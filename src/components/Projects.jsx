import React, { useState, useEffect, useRef } from "react";
import "../css/Projects.css";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(9); // Initial active project is Conversational AI (ID: 9)
  const titleRefs = useRef([]);

  const projects = [
    {
      id: 9,
      title: "Conversational AI System",
      description: [
        "Built a full-stack conversational AI system with agentic capabilities combining Retrieval-Augmented Generation (RAG), CRM management, and memory-based interactions.",
        "Integrated Cohere for LLM-based responses, FAISS for semantic search, and React-based frontend for user and conversation management.",
        "Designed fully RESTful APIs with structured JSON responses and implemented memory retention for context-aware replies.",
        "Developed for a multi-agent AI hackathon challenge."
      ],
      techStack: ["FastAPI", "Cohere", "FAISS", "React.js", "RAG"],
    },
    {
      id: 1,
      title: "Prepstation",
      description: [
        "Created a web app for online examinations with features like exam creation, result tracking, and profile management.",
        "Built using React.js, Node.js, and JavaScript for a responsive, user-friendly experience.",
        "Implemented robust user and data handling for both students and teachers."
      ],
      techStack: ["React.js", "Node.js", "JavaScript"],
    },
    {
      id: 2,
      title: "Spendee",
      description: [
        "Designed a budget management app to track expenses, visualize spending patterns, and manage balances.",
        "Included features like calculator access, search options, and graphical spending analysis.",
        "Developed with Java and Android Studio for optimal performance on mobile devices."
      ],
      techStack: ["Java", "Android Studio"],
    },
    {
      id: 3,
      title: "Lung Cancer Detection",
      description: [
        "Built an application for early detection of lung cancer using a CNN model and high-resolution lung scans.",
        "Achieved an accuracy of 85% on small datasets, aiding in accurate and early cancer detection.",
        "Developed using Python and TensorFlow, utilizing image processing techniques."
      ],
      techStack: ["Python", "TensorFlow", "CNN"],
    },
    {
      id: 4,
      title: "Blood Stroke Clot",
      description: [
        "Differentiated between major acute ischemic stroke (AIS) subtypes using a CNN model.",
        "Achieved 88% accuracy on a small dataset, assisting healthcare providers in identifying clot origins.",
        "Used Python and machine learning to enhance accuracy and reliability in predictions."
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
        "Optimized data handling with MySQL and PHPMyAdmin for efficient operations."
      ],
      techStack: ["PHP", "JavaScript", "HTML", "CSS", "MySQL"],
    },
    {
      id: 6,
      title: "Brazil Climate Hadoop Analysis",
      description: [
        "Analyzed large-scale weather data from the southeastern region of Brazil to explore key patterns in temperature, humidity, and wind.",
        "The dataset, sourced from Kaggle, provided hourly weather data across multiple stations, which was processed using Hadoop MapReduce.",
        "Developed MapReduce jobs to analyze dry bulb temperature, relative humidity, dew point, and wind speed variations over time.",
        "Improved job execution times by optimizing memory allocation and using parallel processing."
      ],
      techStack: ["Java", "Hadoop", "HDFS", "Oozie", "Python"],
    },
    {
      id: 7,
      title: "Automated Journal Scraping",
      description: [
        "Automated the scraping and analysis of journal articles from Mobile DNA Journal to gather information such as titles, authors, and abstracts.",
        "Implemented helper functions for extracting article metadata and visualizing publication trends.",
        "Designed publication trend analysis and keyword frequency visualizations using ggplot2.",
        "Preprocessed and cleaned datasets to remove duplicates, handle missing values, and ensure reliable analysis."
      ],
      techStack: ["R", "rvest", "dplyr", "ggplot2", "stringr", "tidyr"],
    },
    {
      id: 8,
      title: "User Management System",
      description: [
        "Developed a Python-based FastAPI application to manage user accounts, roles, authentication, and profile information.",
        "Integrated PostgreSQL for secure and scalable data storage.",
        "Implemented JWT-based authentication and role-based access control for ADMIN, MANAGER, and AUTHENTICATED roles.",
        "Containerized the application with Docker for seamless deployment and scalability."
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "pytest", "JWT"],
    }
  ];

  // Set up Intersection Observer to track which project is in the center of the screen
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when the element crosses the middle 20% of the viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveProject(parseInt(entry.target.dataset.id));
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    titleRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      titleRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const activeData = projects.find(p => p.id === activeProject) || projects[0];

  return (
    <section id="projects" className="scrolly-section" aria-labelledby="projects-heading">
      <div className="scrolly-header-container">
        <h2 id="projects-heading" className="scrolly-heading">Featured Engineering</h2>
        <p className="scrolly-subtitle">Scroll down to explore architectures and implementations.</p>
      </div>

      <div className="scrolly-container">
        
        {/* Left Side: Sticky Glass Console (Desktop Only) */}
        <div className="scrolly-sticky-col">
          <div className="sticky-console-glass">
            {/* The key prop forces React to remount the element and re-trigger the CSS animation */}
            <div key={activeData.id} className="console-content animate-fade-in">
              <div className="console-id-badge">0{projects.findIndex(p => p.id === activeData.id) + 1}</div>
              <h3 className="console-title">{activeData.title}</h3>
              
              <ul className="console-desc-list">
                {activeData.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              
              <div className="console-tech">
                {activeData.techStack.map((tech, i) => (
                  <span key={i} className="console-pill">{tech}</span>
                ))}
              </div>
            </div>
            
            {/* Aesthetic UI elements for the 'Console' look */}
            <div className="console-hud-dots">
               <span className="hud-dot red"></span>
               <span className="hud-dot yellow"></span>
               <span className="hud-dot green"></span>
            </div>
          </div>
        </div>

        {/* Right Side: Scrolling Roster */}
        <div className="scrolly-roster-col">
          {projects.map((proj, idx) => {
            const isActive = activeProject === proj.id;
            return (
              <div 
                key={proj.id}
                ref={(el) => (titleRefs.current[idx] = el)}
                data-id={proj.id}
                className={`roster-item ${isActive ? 'active' : ''}`}
              >
                <div className="roster-number">0{idx + 1}</div>
                <h3 className="roster-title">{proj.title}</h3>
                
                {/* Mobile Fallback: Shows inline when sticky col is hidden */}
                <div className="roster-mobile-details">
                  <ul className="mobile-desc-list">
                    {proj.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <div className="mobile-tech">
                    {proj.techStack.map((tech, i) => (
                      <span key={i} className="mobile-pill">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;
