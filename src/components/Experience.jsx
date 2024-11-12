import React from "react";
import ExperienceItem from "./ExperienceItem";
import "../css/Experience.css"; // Import the new CSS file

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "WEB DEVELOPER",
      company: "H2 Techno World",
      duration: "Jul 2023 – Sep 2023",
      description: [
        "Designed a tax invoice system with enhanced usability and MFA.",
        "Automated email notifications, reducing manual work by 25%.",
      ],
      impact: "Enhanced usability and security.",
      technologies: ["PHP", "JavaScript", "MySQL"],
    },
    {
      id: 2,
      title: "SOFTWARE DEVELOPER",
      company: "Crown Software",
      duration: "Dec 2022 – May 2023",
      description: [
        "Optimized SQL database performance, reducing query times by 40%.",
        "Developed modular components, increasing user engagement by 30%.",
      ],
      impact: "Improved database efficiency and user engagement.",
      technologies: ["PHP", "JavaScript", "AJAX", "SQL"],
    },
    {
      id: 3,
      title: "WEB DEVELOPER",
      company: "NAVPAD INFOTECH",
      duration: "May 2022 – Jul 2022",
      description: [
        "Contributed to the Master Patient Index, a SPA for hospitals.",
        "Used Vue.js and Laravel for efficient database management.",
      ],
      impact: "Streamlined hospital operations.",
      technologies: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      id: 4,
      title: "FRONTEND DEVELOPER",
      company: "Sannibh Technology",
      duration: "May 2021 – Jul 2021",
      description: [
        "Developed a responsive consulting website.",
        "Built and integrated various service pages, enhancing navigation and accessibility.",
      ],
      impact: "Improved user engagement and accessibility.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
  ];

  return (
    <section id="experience">
      <h2>Experience</h2>
      <div className="experience-list">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
