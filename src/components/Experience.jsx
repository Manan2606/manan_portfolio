import React from "react";
import ExperienceItem from "./ExperienceItem";
import "../Experience.css"; // Import the new CSS file

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "WEB DEVELOPER",
      company: "H2 TECHNO WORLD",
      duration: "Jul 2023 – Sep 2023",
      description:
        "Designed and implemented a comprehensive tax invoice system with functionalities for generating detailed, itemized invoices, reprinting invoices for specific periods, integrating user authentication features like login and logout, and developing an automated email notification system to send invoices to submitted email IDs using JS and PHP.",
    },
    {
      id: 2,
      title: "SOFTWARE DEVELOPER",
      company: "CROWN SOFTWARE",
      duration: "Dec 2022 – May 2023",
      description:
        "Managed the SQL database and API handling for MDHostel using PHP, JS and Ajax supporting Flutter and Web Developers to ensure seamless cross-platform integration and functionality, while also designing and developing webpages for the MDHostel website with a blend of frontend and backend technologies to create a robust and user-friendly online presence.",
    },
    {
      id: 3,
      title: "WEB DEVELOPER",
      company: "NAVPAD INFOTECH",
      duration: "May 2022 – July 2022",
      description:
        "Contributed to the Master Patient Index, a Single Page Web Application built using Vue.js and Laravel framework. This application streamlined hospital operations by focusing on Patient and Staff Modules, leveraging MySQL for database management.",
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
