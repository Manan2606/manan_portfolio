import React from "react";
import "../css/Certifications.css";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      icon: "🎓",
      credentialId: "850930ea49954df8982bedf523763637",
      issueDate: "February 2025",
      credentialUrl:
        "https://drive.google.com/file/d/1yp1ugGmXy4hWl6kagaZgIBmMeLVjUzaF/view?usp=sharing",
      status: "completed",
    },
    {
      id: 2,
      title: "AWS Solutions Architect Associate",
      icon: "🚀",
      issueDate: "In Progress",
      estimatedCompletion: "July 2025",
      status: "in-progress",
    },
  ];

  return (
    <section
      id="certifications"
      className="certifications-section"
      aria-labelledby="certifications-heading"
    >
      <h1 id="certifications-heading">Certifications</h1>
      <div className="certification-timeline" role="list">
        {certifications.map((cert, index) => (
          <div
            key={cert.id}
            className={`certification-item ${cert.status}`}
            role="listitem"
          >
            <div className="certification-icon" aria-hidden="true">
              {cert.icon}
            </div>
            <div className="certification-content">
              <h3>{cert.title}</h3>
              {cert.credentialId && (
                <p className="credential-id">
                  Credential ID: {cert.credentialId}
                </p>
              )}
              <p className="issued-date">
                {cert.status === "completed" ? "Issued: " : "Status: "}
                {cert.issueDate}
              </p>
              {cert.estimatedCompletion && (
                <p className="estimated-completion">
                  Estimated Completion: {cert.estimatedCompletion}
                </p>
              )}
              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  className="view-credential"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${cert.title} credential`}
                >
                  View Credential
                </a>
              )}
              {cert.status === "in-progress" && (
                <div
                  className="progress-indicator"
                  role="progressbar"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div className="progress-bar" style={{ width: "60%" }}></div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
