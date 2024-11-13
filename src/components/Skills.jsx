import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaPython,
  FaLaravel,
  FaPhp,
  FaAndroid,
  FaGitAlt,
  FaAws,
  FaWordpress,
  FaFigma,
  FaTools,
  FaDocker, // Added Docker icon
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import "../css/skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#563d7c" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
        { name: "React.js", icon: <FaReact />, color: "#61dafb" },
        { name: "Vue.js", icon: <FaVuejs />, color: "#4fc08d" },
      ],
    },
    {
      category: "Backend and Database Management",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
        { name: "PHP", icon: <FaPhp />, color: "#4F5B93" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ed" }, // Added Docker
      ],
    },
    {
      category: "Design and Collaboration",
      skills: [
        { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
        { name: "Problem Solving", icon: <FaTools />, color: "#FF6F00" },
        { name: "Creativity", icon: <FaTools />, color: "#61dafb" },
        { name: "Communication", icon: <FaTools />, color: "#f7df1e" },
      ],
    },
    {
      category: "Programming Languages and Tools",
      skills: [
        { name: "Python", icon: <FaPython />, color: "#306998" },
        { name: "C++", icon: <FaTools />, color: "#FF6F00" },
        { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
      ],
    },
  ];

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Skills</h2>
      {skills.map((category, index) => (
        <div key={index} className="skills-category">
          <h3 className="skills-category-title">{category.category}</h3>
          <div className="skills-list" role="list">
            {category.skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                style={{ backgroundColor: skill.color }}
                aria-label={skill.name}
                title={skill.name}
              >
                <span className="skill-icon">{skill.icon}</span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Skills;
