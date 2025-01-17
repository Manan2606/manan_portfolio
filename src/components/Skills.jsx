import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaLaravel,
  FaPhp,
  FaGitAlt,
  FaAws,
  FaWordpress,
  FaFigma,
  FaTools,
  FaDocker, // Added Docker icon
  FaAndroid,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import "../css/skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Full Stack Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
        { name: "React.js", icon: <FaReact />, color: "#61dafb" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "PHP", icon: <FaPhp />, color: "#4F5B93" },
        { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
        { name: "Vue.js", icon: <FaVuejs />, color: "#4fc08d" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "REST APIs", icon: <FaTools />, color: "#FF6F00" },
        { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
      ],
    },
    {
      category: "Programming",
      skills: [
        { name: "Python", icon: <FaTools />, color: "#306998" },
        { name: "C", icon: <FaTools />, color: "#FF6F00" },
        { name: "C++", icon: <FaTools />, color: "#FF6F00" },
        { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
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
                style={{ "--skill-bg-color": skill.color }}
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
