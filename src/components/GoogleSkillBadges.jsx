import {
  FaBrain,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGoogle,
  FaRobot,
  FaServer,
} from "react-icons/fa";
import "../css/GoogleSkillBadges.css";

const badgeLinks = [
  {
    title: "Conversational AI on Vertex AI and Dialogflow CX",
    earned: "Mar 30, 2026",
    url: "https://www.skills.google/public_profiles/576604ed-e666-4ec9-abc9-12bfde09b4ca/badges/23353512",
    focus: "Dialogflow CX",
  },
  {
    title: "Create Agents with Generative Playbooks",
    earned: "Apr 1, 2026",
    url: "https://www.skills.google/public_profiles/576604ed-e666-4ec9-abc9-12bfde09b4ca/badges/23389982",
    focus: "Gen AI Agents",
  },
  {
    title: "Introduction to Gemini Enterprise for Customer Experience",
    earned: "Jun 25, 2026",
    url: "https://www.skills.google/public_profiles/5517be20-be3d-4f79-9a20-fb164c3b91f6/badges/25144362",
    focus: "Gemini Enterprise",
  },
  {
    title: "Customer Experience Agent Studio: Fundamentals",
    earned: "Jul 6, 2026",
    url: "https://www.skills.google/public_profiles/5517be20-be3d-4f79-9a20-fb164c3b91f6/badges/25358185",
    focus: "CX Agent Studio",
  },
  {
    title: "Plan Change Management for Gemini Enterprise Deployments",
    earned: "Jul 16, 2026",
    url: "https://www.skills.google/public_profiles/5517be20-be3d-4f79-9a20-fb164c3b91f6/badges/25596565",
    focus: "Deployment Change",
  },
  {
    title: "Accelerate Development with Antigravity",
    earned: "Jul 16, 2026",
    url: "https://www.skills.google/public_profiles/5517be20-be3d-4f79-9a20-fb164c3b91f6/badges/25597971",
    focus: "AI Development",
  },
  {
    title: "Build agents with CX Agent Studio",
    earned: "Jul 20, 2026",
    url: "https://www.skills.google/public_profiles/5517be20-be3d-4f79-9a20-fb164c3b91f6/badges/25737074",
    focus: "Agent Building",
  },
  {
    title: "Build and Deploy Customer Experience Agents",
    earned: "Jul 24, 2026",
    url: "https://www.skills.google/public_profiles/5517be20-be3d-4f79-9a20-fb164c3b91f6/badges/25853561",
    focus: "CX Deployment",
  },
  {
    title: "Build Code-First Enterprise Agents with CX Agent Studio",
    earned: "Jul 30, 2026",
    url: "https://www.skills.google/public_profiles/5517be20-be3d-4f79-9a20-fb164c3b91f6/badges/26127889",
    focus: "Code-First Agents",
  },
  {
    title: "Deploy, monitor and evaluate production-ready CX Agents",
    earned: "Jul 30, 2026",
    url: "https://www.skills.google/public_profiles/5517be20-be3d-4f79-9a20-fb164c3b91f6/badges/26128665",
    focus: "Production Ops",
  },
];

const skillSignals = [
  { value: "10", label: "Google skill badges" },
  { value: "6", label: "CX agent tracks" },
  { value: "2026", label: "latest learning cycle" },
];

const focusAreas = [
  { label: "Dialogflow CX", icon: <FaRobot /> },
  { label: "Gemini Enterprise", icon: <FaBrain /> },
  { label: "CX Agent Studio", icon: <FaGoogle /> },
  { label: "Production Monitoring", icon: <FaServer /> },
];

const GoogleSkillBadges = () => {
  return (
    <section id="google-skill-badges" className="google-badges-section" aria-labelledby="google-badges-heading">
      <div className="google-badges-shell">
        <div className="google-badges-header">
          <span className="google-badges-eyebrow">
            <FaGoogle /> Google Cloud Skills Boost
          </span>
          <h2 id="google-badges-heading">Applied CX AI Credentials</h2>
          <p>
            Ten verified Google Skills badges focused on Dialogflow CX, Gemini Enterprise,
            CX Agent Studio, generative playbooks, deployment, monitoring, and evaluation
            of customer-experience agents.
          </p>
        </div>

        <div className="google-badges-hero">
          <div className="google-badges-summary">
            <div className="google-badges-mark" aria-hidden="true">
              <FaGoogle />
            </div>
            <div>
              <span className="google-badges-kicker">Specialized learning proof</span>
              <h3>Conversational AI and enterprise agent delivery on Google Cloud</h3>
              <p>
                This badge set strengthens the same story as my current work: building,
                deploying, troubleshooting, and evaluating AI-powered customer-experience systems.
              </p>
            </div>
          </div>

          <div className="google-badges-stats" aria-label="Google Skills badge summary">
            {skillSignals.map((signal) => (
              <div className="google-badge-stat" key={signal.label}>
                <strong>{signal.value}</strong>
                <span>{signal.label}</span>
              </div>
            ))}
          </div>

          <div className="google-badges-focus" aria-label="Badge focus areas">
            {focusAreas.map((area) => (
              <span key={area.label}>
                {area.icon}
                {area.label}
              </span>
            ))}
          </div>
        </div>

        <div className="google-badges-grid">
          {badgeLinks.map((badge, index) => (
            <a
              className="google-badge-card"
              href={badge.url}
              target="_blank"
              rel="noopener noreferrer"
              key={badge.url}
              aria-label={`Verify Google Skills badge: ${badge.title}`}
            >
              <div className="google-badge-topline">
                <span className="google-badge-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="google-badge-verified">
                  <FaCheckCircle /> Verified
                </span>
              </div>
              <h3>{badge.title}</h3>
              <div className="google-badge-meta">
                <span>{badge.focus}</span>
                <span>{badge.earned}</span>
              </div>
              <div className="google-badge-link">
                View badge <FaExternalLinkAlt />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GoogleSkillBadges;
