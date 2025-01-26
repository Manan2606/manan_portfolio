import React from "react";
import "../css/Certifications.css";

function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <h1>Certifications</h1>
      <div className="certification-timeline">
        <div className="certification-item">
          <div className="certification-icon">🎓</div>
          <div className="certification-content">
            <h3>AWS Certified Cloud Practitioner</h3>
          </div>
        </div>
        <div className="certification-item">
          <div className="certification-icon">🚀</div>
          <div className="certification-content">
            <h3>
              Preparing for AWS Solutions Architect Associate Certification
            </h3>
            <p className="issued-date">In Progress</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
