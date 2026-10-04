import "../css/About.css";
import NewPhoto from "../Manan_Headshot.png";
import {
  FaAws,
  FaComments,
  FaDownload,
  FaGithub,
  FaGoogle,
  FaLinkedin,
  FaRobot,
  FaServer,
} from "react-icons/fa";

const About = () => {
  const roleFit = [
    "Conversational AI agents",
    "Backend APIs",
    "Cloud delivery",
  ];

  const proofItems = [
    {
      label: "Conversational AI",
      detail: "Dialogflow CX on GCP",
      icon: <FaComments />,
    },
    { label: "3 Cloud Certs", detail: "AWS + GCP", icon: <FaGoogle /> },
    { label: "GCP + AWS", detail: "Cloud delivery", icon: <FaAws /> },
    { label: "Backend APIs", detail: "FastAPI + SQL", icon: <FaServer /> },
    { label: "AI Data Apps", detail: "RAG + Text-to-SQL", icon: <FaRobot /> },
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

          <div className="role-fit-row" aria-label="Target role fit">
            {roleFit.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <div
            className="executive-proof-row"
            aria-label="Profile proof points"
          >
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
              Software engineer who builds and ships conversational AI agents
              end to end, backed by REST API development, cloud observability,
              and governed AI data systems.
            </p>
            <p className="executive-description">
              At Capgemini, I design and configure conversational AI agents for
              an enterprise CCaaS platform on GCP, owning the work from
              requirement gathering and stakeholder discussions through
              conversation flow design, intent and entity configuration, and QA
              validation before release.
            </p>
            <p className="executive-description">
              Outside of work, I build independent projects like{" "}
              <strong>QueryShield AI</strong>, a governed Text-to-SQL platform
              with parser-based SQL validation and BigQuery cost checks, and a
              multi-agent RAG system built on FAISS and Cohere.
            </p>
            <p className="executive-description">
              My strongest stack centers on <strong>Python</strong>,{" "}
              <strong>FastAPI</strong>, <strong>React</strong>,{" "}
              <strong>TypeScript</strong>, <strong>PostgreSQL</strong>,{" "}
              <strong>BigQuery</strong>, <strong>Docker</strong>,{" "}
              <strong>GCP</strong>, <strong>AWS</strong>, and AI tooling
              including <strong>Dialogflow CX</strong>, <strong>Gemini</strong>,{" "}
              <strong>FAISS</strong>, <strong>Cohere</strong>, and the{" "}
              <strong>Claude API</strong>.
            </p>
          </div>

          <div className="executive-actions" aria-label="Primary profile links">
            <a
              className="executive-action primary"
              href="/Manan_Shah_Resume_09242026.pdf"
              download="Manan_Shah_Resume_09242026.pdf"
            >
              <FaDownload /> Resume
            </a>
            <a
              className="executive-action"
              href="https://github.com/Manan2606"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
            <a
              className="executive-action"
              href="https://www.linkedin.com/in/manan-shah-b5376420b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <div className="executive-tags">
            <span className="static-tag">
              <FaAws /> AWS Associate Level Certified
            </span>
            <span className="static-tag">
              <FaGoogle /> Google Associate Cloud Engineer
            </span>
            <span className="static-tag">
              <FaRobot /> Claude Certified Developer
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
