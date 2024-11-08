import React from "react";
import "../About.css";
import Image from "../Image.jpg";
import DownloadButton from "./DownloadButton"; // Correct the import path

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-left">
          <h2 className="about-name">MANAN SHAH</h2>
          <p className="about-description">
            Computer Science student with a comprehensive skill set in both
            front-end and back-end development. Proficient in various
            programming languages, including JavaScript, SQL, React, and PHP.
          </p>
          <DownloadButton /> {/* Add the DownloadButton component here */}
        </div>
        <div className="about-right">
          <img src={Image} alt="Manan Shah" className="about-photo" />
        </div>
      </div>
    </section>
  );
};

export default About;
