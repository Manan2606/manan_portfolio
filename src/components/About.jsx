import React from "react";
import "../css/About.css";
import NewPhoto from "../Resume_Profile.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="about-section modern-about"
      aria-labelledby="about-heading"
    >
      <div className="about-card">
        <div className="about-photo-container">
          <img
            src={NewPhoto}
            alt="Manan Shah - Full Stack & AI Engineer"
            className="about-photo-modern"
            loading="eager"
            width="320"
            height="320"
          />
        </div>

        <div className="about-info">
          <div className="about-accent-bar">
            <h2 id="about-heading" className="about-name-modern">
              MANAN SHAH
            </h2>
            <span className="about-title">Full Stack & AI Engineer</span>
          </div>

          <div className="about-text-modern">
            <p className="about-description">
              Full‑stack software and AI engineer specializing in building
              secure, scalable, and AI‑driven web applications using{" "}
              <strong>Python, JavaScript, React.js, PHP, FastAPI,</strong> and{" "}
              <strong>AWS</strong>. Experienced in{" "}
              <strong>database management</strong> and{" "}
              <strong>CI/CD pipelines</strong>, with proven success in{" "}
              <strong>AI Hackathon</strong> projects.
            </p>
            <p className="about-description">
              Certified Cloud Developer with expertise in{" "}
              <strong>cloud deployment</strong> and{" "}
              <strong>application development</strong>. Passionate about
              creating solutions that combine web engineering and AI to drive
              impactful results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
