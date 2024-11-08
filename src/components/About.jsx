import React from "react";
import "../About.css";
import Image from "../Image.jpeg";
import DownloadButton from "./DownloadButton"; // Correct the import path

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-left">
          <h2 className="about-name">MANAN SHAH</h2>
          <p className="about-description">
            A passionate Software Developer currently pursuing my Master's
            degree at NJIT, following my Bachelor's in Computer Science from
            Changa University.
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
