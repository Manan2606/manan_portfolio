import React from "react";
import "../css/About.css";
import NewPhoto from "../Manan_Headshot.png";
import { FaAws, FaDownload, FaGithub, FaGoogle, FaLinkedin, FaRobot, FaServer } from "react-icons/fa";

const About = () => {
  const proofItems = [
    { label: "3 Cloud Certs", detail: "AWS + GCP", icon: <FaGoogle /> },
    { label: "GCP + AWS", detail: "Cloud delivery", icon: <FaAws /> },
    { label: "FastAPI / React", detail: "Full-stack systems", icon: <FaServer /> },
    { label: "AI / RAG", detail: "FAISS + Cohere", icon: <FaRobot /> },
  ];

  return (
    <section id="about" className="about-section">
      <div className="executive-card">
        <div className="executive-photo-wrapper">
          <img
            src={NewPhoto}
            alt="Manan Shah - Software Engineer focused on AI and cloud systems"
            className="executive-photo"
            loading="eager"
            width="320"
            height="320"
          />
        </div>

        <div className="executive-info">
          <h2 id="about-heading" className="executive-name">
            MANAN SHAH
          </h2>
          <h3 className="executive-title">
            Software Engineer | AI & Cloud Systems
          </h3>

          <div className="executive-proof-row" aria-label="Profile proof points">
            {proofItems.map((item) => (
              <div className="executive-proof-item" key={item.label}>
                <span className="proof-icon">{item.icon}</span>
                <span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </span>
              </div>
            ))}
          </div>

          <div className="executive-text">
            <p className="executive-hook">
              Backend-focused software engineer building reliable APIs, AI-enabled workflows, and cloud systems for production environments.
            </p>
            <p className="executive-description">
              At Capgemini, I deliver Dialogflow CX and Google Cloud enhancements while expanding into Gemini Enterprise for Customer Experience (GECX) for an enterprise CCaaS platform, tracing conversation flows, webhook behavior, cloud logs, and backend dependencies to improve routing accuracy and reduce call latency.
            </p>
            <p className="executive-description">
              Recent work spans <strong>FastAPI</strong>, <strong>React</strong>, <strong>PostgreSQL</strong>, <strong>Docker</strong>, <strong>AWS</strong>, <strong>Cloud Run</strong>, <strong>BigQuery</strong>, <strong>GECX - learning</strong>, and RAG systems built with <strong>FAISS</strong> and <strong>Cohere</strong>.
            </p>
          </div>

          <div className="executive-actions" aria-label="Primary profile links">
            <a className="executive-action primary" href="/Manan_Shah_Resume_06302026.pdf" download="Manan_Shah_Resume.pdf">
              <FaDownload /> Resume
            </a>
            <a className="executive-action" href="https://github.com/Manan2606" target="_blank" rel="noopener noreferrer">
              <FaGithub /> GitHub
            </a>
            <a className="executive-action" href="https://www.linkedin.com/in/manan-shah-b5376420b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <div className="executive-tags">
            <span className="static-tag"><FaAws /> AWS Associate Level Certified</span>
            <span className="static-tag"><FaGoogle /> Google Associate Cloud Engineer</span>
            <span className="static-tag"><FaRobot /> AI Agentic Systems</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
