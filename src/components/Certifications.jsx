import { FaAws, FaCheckCircle, FaExternalLinkAlt, FaGoogle } from "react-icons/fa";
import "../css/Certifications.css";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      level: "Foundational",
      icon: <FaAws />,
      badgeId: "bec885f3-2082-4b46-9574-e832a5b70419",
      credentialUrl: "https://www.credly.com/badges/bec885f3-2082-4b46-9574-e832a5b70419/public_url",
      accent: "#FF9900"
    },
    {
      id: 2,
      title: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      level: "Associate",
      icon: <FaAws />,
      badgeId: "6431b330-58fb-4459-9739-3d2d066ec3db",
      credentialUrl: "https://www.credly.com/badges/6431b330-58fb-4459-9739-3d2d066ec3db/public_url",
      accent: "#00A1F1"
    },
    {
      id: 3,
      title: "Google Associate Cloud Engineer",
      issuer: "Google Cloud",
      level: "Associate",
      icon: <FaGoogle />,
      badgeId: "15423864-0aeb-4288-aa84-974468070e08",
      credentialUrl: "https://www.credly.com/badges/15423864-0aeb-4288-aa84-974468070e08",
      accent: "#34A853"
    },
  ];

  return (
    <section id="certifications" className="certifications-section" aria-labelledby="certifications-heading">
      <h2 id="certifications-heading" className="wallet-heading">Verified Credentials</h2>
      <p className="wallet-subtitle">Cloud certifications verified through public Credly badges.</p>

      <div className="credential-grid">
        {certifications.map((cert) => (
          <article
            key={cert.id}
            className="credential-card"
            style={{ '--accent-color': cert.accent }}
          >
            <div className="credential-card-glow" aria-hidden="true"></div>

            <div className="credential-topline">
              <div className="credential-issuer">
                <span className="credential-icon">{cert.icon}</span>
                <span>{cert.issuer}</span>
              </div>
              <div className="verified-chip">
                <FaCheckCircle /> Credly Verified
              </div>
            </div>

            <div className="credential-body">
              <h3>{cert.title}</h3>
              <div className="credential-meta-row">
                <div>
                  <span className="credential-label">Level</span>
                  <strong>{cert.level}</strong>
                </div>
                <div>
                  <span className="credential-label">Badge ID</span>
                  <strong className="credential-id">{cert.badgeId.slice(0, 8).toUpperCase()}</strong>
                </div>
              </div>
            </div>

            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="credential-verify-link"
              aria-label={`Verify ${cert.title} on Credly`}
            >
              Verify on Credly <FaExternalLinkAlt />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
