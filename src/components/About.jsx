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
              I recently graduated with a{" "}
              <strong>Master's in Computer Science</strong> from
              <strong> NJIT</strong>, earning a <strong>3.9 GPA</strong>. I'm
              passionate about crafting scalable, creative, and efficient
              solutions in <strong>full-stack web development </strong>
              and <strong>data-driven applications</strong>. My skill set spans
              technologies like
              <strong> React.js</strong>, <strong>Node.js</strong>,{" "}
              <strong>FastAPI</strong>, and <strong>Hadoop</strong>, enabling me
              to build solutions that exceed expectations.
            </p>
            <p className="about-description">
              My professional experience at <strong>H2 Techno World</strong> and{" "}
              <strong>Crown Software </strong>
              includes building systems that enhanced performance and user
              satisfaction. At H2 Techno World, I built a secure tax invoice
              system with MFA, reducing manual errors by <strong>30%</strong>.
              At Crown Software, I optimized database queries, boosting
              performance by <strong>40%</strong>.
            </p>
            <p className="about-description">
              <strong>Highlighted Projects:</strong>
              <ul>
                <li>
                  Developed a{" "}
                  <strong>JWT-authenticated user management system</strong> with
                  role-based access control.
                </li>
                <li>
                  Created a <strong>hospital management platform</strong> using
                  Vue.js and Laravel, managing over{" "}
                  <strong>1,000 patient records</strong> efficiently.
                </li>
                <li>
                  Executed large-scale{" "}
                  <strong>Brazilian weather data analysis</strong> using Hadoop
                  MapReduce and AWS.
                </li>
              </ul>
              I also have practical expertise in building{" "}
              <strong>responsive web apps</strong>, deploying{" "}
              <strong>ML models</strong>, and streamlining workflows with{" "}
              <strong>Docker</strong> and <strong>CI/CD</strong>.
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
