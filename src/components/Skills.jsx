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
  FaDatabase,
  FaLaravel,
  FaPhp,
  FaAndroid,
  FaGitAlt,
  FaAws,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import "../skills.css";

const Skills = () => {
  const skills = [
    {
      category: "Full Stack Web Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
        { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
        { name: "Bootstrap", icon: <FaBootstrap />, color: "#563d7c" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
        { name: "React.js", icon: <FaReact />, color: "#61dafb" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "Vue.js", icon: <FaVuejs />, color: "#4fc08d" },
        { name: "Laravel", icon: <FaLaravel />, color: "#FF2D20" },
        { name: "PHP", icon: <FaPhp />, color: "#4F5B93" },
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
      ],
    },
    {
      category: "Design and Problem Solving",
      skills: [
        { name: "Figma", icon: <FaFigma />, color: "#F24E1E" },
        { name: "Problem Solving", icon: <FaDatabase />, color: "#FF6F00" },
        { name: "Creativity", icon: <FaReact />, color: "#61dafb" }, // Use a placeholder icon
        { name: "Communication", icon: <FaJs />, color: "#f7df1e" }, // Use a placeholder icon
      ],
    },
    {
      category: "SD and Programming",
      skills: [
        { name: "Python", icon: <FaPython />, color: "#306998" },
        { name: "C", icon: <FaDatabase />, color: "#FF6F00" }, // Use a placeholder icon
        { name: "C++", icon: <FaDatabase />, color: "#FF6F00" }, // Use a placeholder icon
        { name: "Android", icon: <FaAndroid />, color: "#3DDC84" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
      ],
    },
  ];

  return (
    <section id="skills">
      <h2>Skills</h2>
      {skills.map((category, index) => (
        <div key={index} className="skills-category">
          <h3 className="skills-category-title">{category.category}</h3>
          <div className="skills-list">
            {category.skills.map((skill, index) => (
              <div
                key={index}
                className="skill-item"
                style={{ backgroundColor: skill.color }}
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
