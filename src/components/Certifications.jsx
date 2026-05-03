import { FaAws, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import "../css/Certifications.css";

function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: <FaAws />,
      credentialId: "850930ea49954df8982bedf523763637",
      issueDate: "February 2025",
      credentialUrl: "https://drive.google.com/file/d/1yp1ugGmXy4hWl6kagaZgIBmMeLVjUzaF/view?usp=sharing",
      status: "completed",
      accent: "#FF9900" 
    },
    {
      id: 2,
      title: "AWS Cloud Developer Associate",
      issuer: "Amazon Web Services",
      icon: <FaAws />,
      credentialId: "f37d2bebbed0493887e2eef436a6284d",
      issueDate: "August 2025",
      credentialUrl: "https://drive.google.com/file/d/1YRdxHcck50PO0yk4josS8zRibN7pgEce/view?usp=sharing",
      status: "completed",
      accent: "#00a1f1"
    },
  ];

  return (
    <section id="certifications" className="certifications-section" aria-labelledby="certifications-heading">
      <h2 id="certifications-heading" className="wallet-heading">Digital Credentials</h2>
      <p className="wallet-subtitle">Verified cloud engineering certifications.</p>
      
      <div className="floating-cards-container">
        {certifications.map((cert, index) => {
          // Asymmetrical floating math for exactly 2 cards
          const baseRotate = index === 0 ? -3 : 4;
          const baseTranslateY = index === 0 ? 20 : -15;

          return (
            <div 
              key={cert.id}
              className="floating-cert-card"
              style={{
                '--base-rotate': `${baseRotate}deg`,
                '--base-translate-y': `${baseTranslateY}px`,
                '--accent-color': cert.accent
              }}
            >
              {/* Premium Glassmorphic Card Content */}
              <div className="pass-header">
                <div className="pass-issuer">
                  <span className="pass-icon" style={{ color: cert.accent }}>{cert.icon}</span>
                  <span className="pass-issuer-text">{cert.issuer}</span>
                </div>
                {cert.status === 'completed' && <FaCheckCircle className="pass-verified" />}
              </div>
              
              <div className="pass-body">
                <h3 className="pass-title">{cert.title}</h3>
                
                <div className="pass-metadata">
                  <div className="pass-meta-item">
                    <span className="meta-label">Issued</span>
                    <span className="meta-value">{cert.issueDate}</span>
                  </div>
                  <div className="pass-meta-item">
                    <span className="meta-label">Credential ID</span>
                    <span className="meta-value id-font">{cert.credentialId.substring(0, 16).toUpperCase()}...</span>
                  </div>
                </div>
              </div>
              
              <div className="pass-footer">
                <div className="pass-chip"></div> {/* Fake smart-card chip aesthetic */}
                <a 
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pass-verify-btn"
                >
                  Verify <FaExternalLinkAlt className="verify-icon" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Certifications;
