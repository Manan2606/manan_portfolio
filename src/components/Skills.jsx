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
import { SiMysql } from "react-icons/si";
import "../css/skills.css";

const categories = [
  {
    title: "Languages",
    summary: "The languages I use most for APIs, automation, data work, and full-stack delivery.",
    accent: "#7c3aed",
    skills: [
      { name: "Python", icon: <FaPython /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <FaCode /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "Java", icon: <FaJava /> },
    ],
  },
  {
    title: "Backend & APIs",
    summary: "Backend services, API design, auth workflows, and maintainable server-side systems.",
    accent: "#00ccff",
    skills: [
      { name: "FastAPI", icon: <FaServer /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "REST APIs", icon: <FaCogs /> },
      { name: "SQLAlchemy", icon: <FaDatabase /> },
      { name: "Spring Boot", icon: <FaLeaf /> },
    ],
  },
  {
    title: "Frontend",
    summary: "Practical UI work for dashboards, portfolio experiences, and full-stack products.",
    accent: "#22c55e",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <FaCode /> },
      { name: "Vue.js", icon: <FaVuejs /> },
      { name: "HTML5 / CSS3", icon: <FaHtml5 /> },
    ],
  },
  {
    title: "Data & AI",
    summary: "Applied AI systems, governed analytics, retrieval pipelines, and production data workflows.",
    accent: "#a855f7",
    skills: [
      { name: "BigQuery", icon: <FaChartBar /> },
      { name: "PostgreSQL", icon: <FaDatabase /> },
      { name: "MySQL", icon: <SiMysql /> },
      { name: "RAG", icon: <FaRobot /> },
      { name: "FAISS", icon: <FaSearch /> },
      { name: "Gemini", icon: <FaBrain /> },
      { name: "Cohere", icon: <FaBrain /> },
      { name: "SQLGlot", icon: <FaVial /> },
    ],
  },
  {
    title: "Cloud & Delivery",
    summary: "Certified cloud platforms, observability, containers, and release automation.",
    accent: "#f59e0b",
    skills: [
      { name: "GCP", icon: <FaCloud /> },
      { name: "Dialogflow CX", icon: <FaCommentDots /> },
      { name: "Gemini Enterprise CX", icon: <FaRobot /> },
      { name: "Cloud Run", icon: <FaCloud /> },
      { name: "Cloud Logging", icon: <FaChartLine /> },
      { name: "AWS", icon: <FaAws /> },
      { name: "Docker", icon: <FaDocker /> },
      { name: "GitHub Actions", icon: <FaGitAlt /> },
    ],
  },
  {
    title: "Engineering Tools",
    summary: "Team delivery, testing, API validation, documentation, and operational analysis.",
    accent: "#ef4444",
    skills: [
      { name: "JIRA", icon: <FaTasks /> },
      { name: "Postman", icon: <FaTools /> },
      { name: "pytest", icon: <FaVial /> },
      { name: "Looker", icon: <FaChartLine /> },
      { name: "Confluence", icon: <FaTools /> },
    ],
  },
];

const featuredStats = [
  { value: "6", label: "Focused Areas" },
  { value: "35", label: "Core Skills" },
  { value: "3", label: "Cloud Certifications" },
];

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="skills-shell">
        <div className="skills-heading-block">
          <span className="skills-eyebrow">Focused Stack</span>
          <h2 id="skills-heading">Tech Stack</h2>
          <p className="skills-subtitle">
            A focused view of the tools I use most for backend APIs, cloud delivery, AI workflows, and full-stack product work.
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