import React from "react";
import "../css/About.css";
import NewPhoto from "../Manan_Headshot.png";
import { FaAws, FaGoogle, FaRobot } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="executive-card">
        
        <div className="executive-photo-wrapper">
          <img
            src={NewPhoto}
            alt="Manan Shah - Full-Stack Engineer & Cloud AI Consultant"
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
            Full-Stack Engineer & Cloud AI Consultant
          </h3>

          <div className="executive-text">
            <p className="executive-hook">
              Engineer by training, consultant by evolution - I build at the crossroads of full-stack development, AI, and cloud strategy.
            </p>
            <p className="executive-description">
              At Capgemini, I architect intelligent solutions for a Customer Care as a Service platform using <strong>Dialogflow CX</strong>, <strong>BigQuery</strong>, <strong>Spring Boot</strong>, and <strong>Google Cloud</strong>. Beyond client work, I have shipped production systems that cut deployment cycles from days to hours, built <strong>multi-agent AI</strong> applications, and competed in AI Hackathons.
            </p>
            <p className="executive-description">
              Dual AWS-certified, Google Cloud-bound, and equally comfortable in code and the boardroom.
            </p>
          </div>

          <div className="executive-tags">
            <span className="static-tag"><FaAws /> AWS Associate Level Certified</span>
            <span className="static-tag"><FaGoogle /> Google Cloud Bound</span>
            <span className="static-tag"><FaRobot /> AI Agentic Systems</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
