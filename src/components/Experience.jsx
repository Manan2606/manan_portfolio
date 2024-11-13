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
        "Designed and implemented a comprehensive tax invoice system with itemized invoice generation.",
        "Enabled reprinting of invoices for specific time periods, enhancing user accessibility.",
        "Integrated secure user authentication, including login/logout functionality.",
        "Developed an automated email notification system using JavaScript and PHP to send invoices to submitted email IDs, reducing manual handling by 25%.",
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
        "Led optimization of SQL databases and API operations for MDHostel, reducing query times by 40%.",
        "Built responsive, user-friendly webpages, increasing user engagement by 30%.",
        "Developed core modules like Attendance, Complaint, Fees, Food, and Leave, streamlining hostel operations for 500+ residents.",
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
        "Developed a single-page hospital web app using Vue.js and Laravel, reducing manual data entry by 30%.",
        "Used MySQL to manage patient and staff information, schedule appointments, and generate bills.",
        "Enhanced data accessibility and streamlined tracking for hospital operations.",
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
        "Created a responsive consulting website using HTML, CSS, and JavaScript, boosting user engagement.",
        "Integrated service pages for consulting, improving user navigation and experience.",
        "Streamlined service offerings for better accessibility and usability.",
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
