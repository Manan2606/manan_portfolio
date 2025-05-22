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
              I recently graduated with a Master’s in Computer Science from
              NJIT, earning a 3.9 GPA. I’m passionate about crafting scalable,
              creative, and efficient solutions in full-stack web development
              and data-driven applications. My skill set covers a broad range of
              technologies, including React.js, Node.js, FastAPI, and Hadoop,
              allowing me to produce results that satisfy both user expectations
              and business goals.
            </p>
            <p className="about-description">
              During my career, I’ve delivered meaningful results at H2 Techno
              World and Crown Software by building systems that boosted
              efficiency and improved user experiences. At H2 Techno World, I
              created a tax invoice system with strong authentication features,
              cutting manual errors by 30%. At Crown Software, I refined
              database queries, achieving a 40% performance boost.
            </p>
            <p className="about-description">
              Beyond my professional roles, I’ve tackled several standout
              projects that showcase my abilities:
              <ul>
                <li>
                  Built a secure, scalable user management system using
                  JWT-based authentication and role-based access control.
                </li>
                <li>
                  Created a hospital management system with Vue.js and Laravel,
                  simplifying data handling for over 1,000 patient records.
                </li>
                <li>
                  Conducted in-depth Brazilian weather data analysis with Hadoop
                  MapReduce and AWS for efficient parallel processing.
                </li>
              </ul>
              I also bring practical expertise in developing responsive web
              applications, applying machine learning models, and streamlining
              processes with Docker and CI/CD tools.
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
