import { FaExternalLinkAlt, FaGithub, FaProjectDiagram, FaServer } from "react-icons/fa";
import "../css/Projects.css";

const projectStats = [
  { value: "2", label: "AI systems" },
  { value: "22+", label: "Project API endpoints" },
  { value: "5+", label: "SQL safety guardrails" },
  { value: "2", label: "Cloud-backed builds" },
];

const projects = [
  {
    title: "QueryShield AI",
    eyebrow: "Governed Text-to-SQL",
    description:
      "A governed analytics platform that turns uploaded CSV datasets into validated BigQuery SQL, bounded result sets, AI summaries, charts, history, and audit logs.",
    techStack: ["FastAPI", "Next.js", "TypeScript", "BigQuery", "Gemini", "SQLGlot", "Cloud Run"],
    codeUrl: "https://github.com/Manan2606/QueryShield_AI",
    architecture:
      "Next.js UI -> FastAPI -> Gemini SQL generation -> SQLGlot validation -> BigQuery dry run -> controlled execution -> audit logs",
    highlights: ["5+ governance layers", "15+ backend endpoints", "9 Alembic migrations", "GCP deployment", "CI/CD automation"],
    evidenceLinks: [
      { label: "Screenshots", url: "https://github.com/Manan2606/QueryShield_AI/tree/dev/docs/screenshots" },
      { label: "Architecture", url: "https://github.com/Manan2606/QueryShield_AI/blob/dev/docs/architecture.md" },
      { label: "Deployment", url: "https://github.com/Manan2606/QueryShield_AI/blob/dev/docs/gcp-mvp1-deployment.md" },
    ],
    caseStudy: {
      problem:
        "AI-generated SQL can be unsafe, expensive, or hard to audit when it is executed without validation or cost controls.",
      built:
        "A full-stack Text-to-SQL workflow with CSV upload, schema preview, SQL generation, validation, dry runs, execution, summaries, charts, history, and audit logs.",
      architecture:
        "The backend owns authentication, dataset metadata, Gemini calls, SQLGlot validation, BigQuery dry runs, controlled execution, query history, and audit persistence.",
      role: "Owned the full-stack architecture, backend API design, governance pipeline, GCP deployment path, and frontend analytics workflow.",
      decisions:
        "Added explicit pre-execution guardrails: JWT auth, ownership checks, parser validation, read-only enforcement, BigQuery dry runs, row limits, and timeout controls.",
      outcome:
        "Delivered a GCP-backed AI analytics platform with 15+ backend endpoints, 9 migrations, screenshots, docs, tests, Docker, GitHub Actions, and Workload Identity Federation.",
    },
  },
  {
    title: "Multi-Agent Conversational AI System",
    eyebrow: "RAG / CRM Assistant",
    description:
      "A FastAPI and React conversational AI system combining FAISS retrieval, Cohere generation, conversation memory, CSV ingestion, and CRM user workflows.",
    techStack: ["Python", "FastAPI", "React.js", "SQLite", "SQLAlchemy", "Cohere", "FAISS"],
    codeUrl: "https://github.com/Manan2606/Multi_Agentic_Conversational_AI_System",
    architecture:
      "React UI -> FastAPI endpoints -> SQLite CRM store -> FAISS retrieval -> Cohere reranking/generation -> conversation logging",
    highlights: ["7 API endpoints", "6-stage RAG pipeline", "2 CRM entities", "CSV ingestion", "Conversation memory"],
    evidenceLinks: [
      { label: "API README", url: "https://github.com/Manan2606/Multi_Agentic_Conversational_AI_System/blob/main/readme.md" },
      { label: "FastAPI app", url: "https://github.com/Manan2606/Multi_Agentic_Conversational_AI_System/blob/main/main.py" },
      { label: "React UI", url: "https://github.com/Manan2606/Multi_Agentic_Conversational_AI_System/tree/main/frontend/src/components" },
    ],
    caseStudy: {
      problem:
        "Build a credible assistant workflow that could answer with retrieved context while also managing users, conversations, and uploaded documents.",
      built:
        "A RAG application with chat, CSV document ingestion, CRM user management, conversation history, reset workflows, and memory-aware responses.",
      architecture:
        "FastAPI exposes JSON endpoints, SQLite stores users/conversations, FAISS retrieves knowledge rows, custom reranking improves candidates, and Cohere generates responses.",
      role: "Owned the backend API, RAG workflow, CRM data models, frontend integration, and project documentation for the hackathon build.",
      decisions:
        "Kept retrieval, reranking, prompt construction, generation, CRM persistence, and document ingestion modular so each stage could be tested independently.",
      outcome:
        "Delivered 4 core capabilities, 7 REST endpoints, a 6-stage RAG pipeline, 4 React frontend components, and 2 SQLite-backed CRM entities.",
    },
  },
];

const renderCaseStudy = (project) => {
  const entries = [
    ["Problem", project.caseStudy.problem],
    ["Built", project.caseStudy.built],
    ["Architecture", project.caseStudy.architecture],
    ["Role", project.caseStudy.role],
    ["Decisions", project.caseStudy.decisions],
    ["Outcome", project.caseStudy.outcome],
  ];

  return (
    <div className="project-case-study">
      <div className="case-study-heading">
        <FaProjectDiagram />
        <span>Case Study</span>
      </div>
      <div className="project-case-grid">
        {entries.map(([label, text]) => (
          <div className="project-case-item" key={label}>
            <strong>{label}</strong>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects-section" aria-labelledby="projects-heading">
      <div className="projects-header">
        <span className="projects-eyebrow">Proof of Work</span>
        <h2 id="projects-heading">Selected Engineering Work</h2>
        <p>
          GitHub-backed projects with visible implementation, architecture evidence,
          cloud deployment work, and applied AI depth.
        </p>
      </div>

      <div className="project-signal-grid" aria-label="Project proof metrics">
        {projectStats.map((stat) => (
          <div className="project-signal" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>

      <div className="project-showcase-grid">
        {projects.map((project, index) => (
          <article className="project-showcase-card" key={project.title}>

            <div className="project-card-topline">
              <span className="project-index">0{index + 1}</span>
              <span className="project-eyebrow">{project.eyebrow}</span>
            </div>

            <div className="project-card-header">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>

            <div className="project-architecture">
              <FaServer />
              <span>{project.architecture}</span>
            </div>

            <div className="project-proof-list" aria-label={`${project.title} proof points`}>
              {project.highlights.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>

            <div className="project-evidence-list" aria-label={`${project.title} repository evidence`}>
              {project.evidenceLinks.map((link) => (
                <a href={link.url} target="_blank" rel="noopener noreferrer" key={link.label}>
                  {link.label} <FaExternalLinkAlt />
                </a>
              ))}
            </div>

            <div className="project-tech-list">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            {renderCaseStudy(project)}

            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-repo-button"
              aria-label={`Open ${project.title} GitHub repository`}
            >
              <FaGithub /> View Repository
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;