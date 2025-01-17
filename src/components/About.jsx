// Updated About.jsx
import React from "react";
import "../css/About.css";
import Image from "../Image.jpg";
import DownloadButton from "./DownloadButton";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="center-name">
          <h2 className="about-name">MANAN SHAH</h2>
        </div>
        <div className="about-description-container">
          <div className="about-left">
            <p className="about-description">
              I am a Computer Science graduate student at NJIT (GPA: 4.0), with
              a strong passion for developing scalable, innovative, and
              efficient solutions in the realm of full-stack web development and
              data-driven applications. My expertise spans a diverse tech stack,
              including React.js, Node.js, FastAPI, and Hadoop, and I excel at
              delivering results that align with both user needs and business
              objectives.
            </p>
            <p className="about-description">
              My professional journey includes impactful contributions at H2
              Techno World and Crown Software, where I developed systems that
              improved operational efficiency and user experience. At H2 Techno
              World, I designed a tax invoice system with secure authentication,
              reducing manual errors by 30%, while at Crown Software, I
              optimized database queries, enhancing performance by 40%.
            </p>
            <p className="about-description">
              I have also completed a variety of notable projects, including:
              <ul>
                <li>
                  A user management system with JWT-based authentication and
                  role-based access control for secure and scalable operations.
                </li>
                <li>
                  A hospital management system using Vue.js and Laravel to
                  streamline data management for 1,000+ patient records.
                </li>
                <li>
                  Data-intensive analysis of Brazilian weather using Hadoop
                  MapReduce and AWS for parallel processing.
                </li>
              </ul>
              My hands-on experience extends to building responsive web apps,
              implementing machine learning models, and automating workflows
              with Docker and CI/CD.
            </p>
            <DownloadButton />
          </div>
          <div className="about-right">
            <img src={Image} alt="Manan Shah" className="about-photo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
