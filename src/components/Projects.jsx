import React from "react";
import { FaGithub, FaProjectDiagram, FaServer } from "react-icons/fa";
import "../css/Projects.css";

const projects = [
  {
    title: "Multi-Agent Conversational AI System",
    eyebrow: "AI / RAG Platform",
    description: "A full-stack conversational AI platform with RAG-based Q&A, CSV ingestion, CRM user management, conversation history, and memory-aware responses.",
    techStack: ["Python", "FastAPI", "React.js", "SQLite", "SQLAlchemy", "Cohere", "FAISS"],
    codeUrl: "https://github.com/Manan2606/hackathon_project",
    architecture: "React UI -> FastAPI APIs -> SQLite CRM Store -> FAISS Index -> Cohere LLM -> Conversation Logging",
    highlights: ["7 API endpoints", "6-stage RAG pipeline", "2 CRM entities", "CSV ingestion", "Conversation memory"],
    caseStudy: {
      problem: "Build a credible AI assistant workflow that could answer with retrieved context while also managing CRM-style users, conversations, and uploaded documents.",
      built: "A full-stack RAG application with chat, document ingestion, user management, conversation history, and memory-aware responses.",
      architecture: "React components call FastAPI services; backend persists users/conversations in SQLite with SQLAlchemy, searches FAISS indexes, constructs prompts, calls Cohere, and logs responses.",
      role: "Owned the application architecture, backend API design, RAG workflow, data models, and frontend integration for the hackathon build.",
      decisions: "Kept retrieval, prompt construction, response generation, and CRM logging modular so each stage could be tested and improved independently.",
      outcome: "Delivered 4 core capabilities, 7 REST endpoints, a 6-stage RAG pipeline, and 2 SQLite-backed CRM entities."
    }
  },
  {
    title: "User Management System",
    eyebrow: "Backend API / Auth",
    description: "A FastAPI backend for account management, JWT authentication, role-based authorization, PostgreSQL persistence, Dockerized runtime, and pytest validation.",
    techStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "pytest", "JWT"],
    codeUrl: "https://github.com/Manan2606/user_management",
    architecture: "Client -> FastAPI -> JWT Auth -> RBAC Policies -> PostgreSQL -> Dockerized Runtime -> pytest Validation",
    highlights: ["JWT auth", "RBAC", "PostgreSQL", "Dockerized API", "pytest coverage"],
    caseStudy: {
      problem: "Create a backend foundation for secure user operations where authentication, role separation, and maintainable API behavior mattered more than UI polish.",
      built: "A FastAPI service for user accounts, profile workflows, authentication, and role-based access across admin, manager, and authenticated-user paths.",
      architecture: "FastAPI exposes REST endpoints, JWT secures requests, RBAC gates privileged operations, PostgreSQL stores account data, Docker standardizes runtime, and pytest validates behavior.",
      role: "Owned backend implementation, auth flow, database integration, container setup, and endpoint validation strategy.",
      decisions: "Used JWT and explicit roles to keep authorization readable, PostgreSQL for durable relational data, and Docker/pytest to make the app easier to run and verify.",
      outcome: "Built a recruiter-verifiable backend project demonstrating auth, RBAC, persistence, containerization, and testable API design."
    }
  }
];

const CaseStudy = ({ project }) => {
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
        <p>Two recent GitHub-backed projects showing architecture, API scope, implementation decisions, and backend depth.</p>
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

            <div className="project-tech-list">
              {project.techStack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <CaseStudy project={project} />

            <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="project-repo-button">
              <FaGithub /> View Repository
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
