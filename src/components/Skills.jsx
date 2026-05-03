import React, { useRef, useState } from "react";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaVuejs, FaLaravel, FaGitAlt, FaAws,
  FaDocker, FaJava, FaLeaf, FaRobot, FaCloud, FaChartLine, FaCommentDots, FaPython
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import "../css/skills.css";

const HolographicCard = ({ category }) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse position relative to card
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    // Calculate rotation (-15deg to 15deg)
    // If mouse is at left (0), rotateY = -15
    // If mouse is at right (width), rotateY = 15
    const rotateY = ((mouseX / width) * 2 - 1) * 15;
    
    // If mouse is at top (0), rotateX = 15 (tilts backward)
    // If mouse is at bottom (height), rotateX = -15 (tilts forward)
    const rotateX = ((mouseY / height) * -2 + 1) * 15;
    
    setRotate({ x: rotateX, y: rotateY });
    
    // Calculate glare position
    setGlare({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
      opacity: 1
    });
  };

  const handleMouseLeave = () => {
    // Reset back to flat
    setRotate({ x: 0, y: 0 });
    setGlare({ ...glare, opacity: 0 });
  };

  return (
    <div className="holo-card-wrapper">
      <div 
        ref={cardRef}
        className="holo-card"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: rotate.x === 0 && rotate.y === 0 ? "transform 0.5s ease" : "none"
        }}
      >
        {/* The Holographic Glare Layer */}
        <div 
          className="holo-glare" 
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`,
            opacity: glare.opacity,
            transition: glare.opacity === 0 ? "opacity 0.5s ease" : "none"
          }}
        />
        
        {/* 3D Pop-out Content */}
        <h3 className="holo-title">{category.title}</h3>
        <div className="holo-skills-grid">
          {category.skills.map((skill, idx) => (
            <div key={idx} className="holo-skill" style={{ '--skill-color': skill.color }}>
              <span className="holo-icon">{skill.icon}</span>
              <span className="holo-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  const CATEGORIES = [
    {
      title: "Cloud & AI Engineering",
      skills: [
        { name: "Google Cloud", icon: <FaCloud />, color: "#4285F4" },
        { name: "Vertex AI", icon: <FaRobot />, color: "#4285F4" },
        { name: "Dialogflow CX", icon: <FaCommentDots />, color: "#FF9800" },
        { name: "AWS", icon: <FaAws />, color: "#FF9900" },
        { name: "Cloud Logging", icon: <FaChartLine />, color: "#34A853" },
      ]
    },
    {
      title: "Backend Architecture",
      skills: [
        { name: "Java", icon: <FaJava />, color: "#007396" },
        { name: "Spring Boot", icon: <FaLeaf />, color: "#6DB33F" },
        { name: "Python", icon: <FaPython />, color: "#306998" },
        { name: "Node.js", icon: <FaNodeJs />, color: "#339933" },
        { name: "PHP / Laravel", icon: <FaLaravel />, color: "#FF2D20" },
      ]
    },
    {
      title: "Frontend Systems",
      skills: [
        { name: "React.js", icon: <FaReact />, color: "#61dafb" },
        { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
        { name: "Vue.js", icon: <FaVuejs />, color: "#4fc08d" },
        { name: "HTML5 / CSS3", icon: <FaHtml5 />, color: "#e34f26" },
      ]
    },
    {
      title: "Databases & DevOps",
      skills: [
        { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
        { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
        { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
        { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
      ]
    }
  ];

  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading">Tech Stack</h2>
      <p className="holo-subtitle">Hover over the cards to experience holographic 3D tracking.</p>
      
      <div className="holo-grid">
        {CATEGORIES.map((category, index) => (
          <HolographicCard key={index} category={category} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
