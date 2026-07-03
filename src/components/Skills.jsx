import {
  FaAws,
  FaBrain,
  FaChartBar,
  FaChartLine,
  FaCloud,
  FaCode,
  FaCommentDots,
  FaCogs,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJs,
  FaLeaf,
  FaNodeJs,
  FaPython,
  FaReact,
  FaRobot,
  FaSearch,
  FaServer,
  FaTasks,
  FaTools,
  FaVuejs,
  FaVial,
} from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";
import "../css/skills.css";

const categories = [
  {
    title: "Languages",
    summary: "Core programming languages used across backend, frontend, data, and systems coursework.",
    accent: "#7c3aed",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <FaCode /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "C++", icon: <FaCode /> },
      { name: "PHP", icon: <FaCode /> },
    ],
  },
  {
    title: "Frontend & Backend",
    summary: "Application frameworks, API design, service architecture, and production web delivery.",
    accent: "#00ccff",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <FaCode /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "FastAPI", icon: <FaServer /> },
      { name: "Spring Boot", icon: <FaLeaf /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "REST APIs", icon: <FaCogs /> },
      { name: "Microservices", icon: <FaServer /> },
      { name: "SQLAlchemy", icon: <FaDatabase /> },
      { name: "HTML5 / CSS3", icon: <FaHtml5 /> },
    ],
  },
  {
    title: "Databases & Analytics",
    summary: "Relational, document, embedded, and warehouse systems used in product and cloud workflows.",
    accent: "#22c55e",
    skills: [
      { name: "PostgreSQL", icon: <FaDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "SQLite", icon: <FaDatabase /> },
      { name: "BigQuery", icon: <FaChartBar /> },
      { name: "SQL Optimization", icon: <FaSearch /> },
      { name: "Data Validation", icon: <FaVial /> },
    ],
  },
  {
    title: "Cloud & DevOps",
    summary: "Certified cloud platforms, deployment workflows, infrastructure, and observability tools.",
    accent: "#f59e0b",
    skills: [
      { name: "GCP", icon: <FaCloud /> },
      { name: "Dialogflow CX", icon: <FaCommentDots /> },
      { name: "GECX - Learning", icon: <FaRobot /> },
      { name: "Cloud Run", icon: <FaCloud /> },
      { name: "Cloud Logging", icon: <FaChartLine /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "EC2", icon: <FaAws /> },
      { name: "S3", icon: <FaAws /> },
      { name: "RDS", icon: <FaAws /> },
      { name: "Lambda", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "GitHub Actions", icon: <FaGitAlt /> },
      { name: "Git", icon: <FaGitAlt /> },
    ],
  },
  {
    title: "AI & Data Systems",
    summary: "Applied AI workflows from retrieval pipelines to LLM integration and data processing fundamentals.",
    accent: "#a855f7",
    skills: [
      { name: "RAG", icon: <FaRobot /> },
      { name: "FAISS", icon: <FaSearch /> },
      { name: "Cohere LLM", icon: <FaBrain /> },
      { name: "Machine Learning", icon: <FaBrain /> },
      { name: "TensorFlow", icon: <FaBrain /> },
      { name: "ETL / ELT", icon: <FaCogs /> },
      { name: "Looker", icon: <FaChartLine /> },
    ],
  },
  {
    title: "Engineering Tools",
    summary: "Collaboration, testing, documentation, API validation, and delivery tools used on real teams.",
    accent: "#ef4444",
    skills: [
      { name: "JIRA", icon: <FaTasks /> },
      { name: "Postman", icon: <FaTools /> },
      { name: "pytest", icon: <FaVial /> },
      { name: "Cursor", icon: <FaCode /> },
      { name: "Visio", icon: <FaChartLine /> },
      { name: "Confluence", icon: <FaTools /> },
    ],
  },
];

const featuredStats = [
  { value: "6", label: "Skill Domains" },
  { value: "50", label: "Resume Skills Covered" },
  { value: "3", label: "Cloud Certifications" },
];

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="skills-shell">
        <div className="skills-heading-block">
          <span className="skills-eyebrow">Capability Map</span>
          <h2 id="skills-heading">Tech Stack</h2>
          <p className="skills-subtitle">
            Core technologies used across production engineering, cloud platforms, AI workflows, backend systems, and team delivery.
          </p>
        </div>

        <div className="skills-stats" aria-label="Technology stack summary">
          {featuredStats.map((stat) => (
            <div className="skills-stat" key={stat.label}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {categories.map((category) => (
            <article className="skill-category-card" key={category.title} style={{ '--category-accent': category.accent }}>
              <div className="skill-card-header">
                <div>
                  <h3>{category.title}</h3>
                  <p>{category.summary}</p>
                </div>
                <span className="skill-count">{category.skills.length}</span>
              </div>

              <div className="skill-chip-grid">
                {category.skills.map((skill) => (
                  <span className="skill-chip" key={skill.name}>
                    <span className="skill-chip-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;




