// src/components/About.jsx
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
              I am a passionate Computer Science student at NJIT with a 4.0 GPA,
              specializing in full-stack web development. My technical
              proficiency spans across front-end and back-end technologies,
              including JavaScript, SQL, React, and PHP. I have industry
              experience in web development, with a strong focus on creating
              efficient systems and optimizing database interactions.
            </p>
            <p className="about-description">
              With hands-on experience at H2 Techno World and Crown Software, I
              implemented impactful projects such as a tax invoice system with
              secure authentication and a responsive hostel management system
              for MDHostel. Additionally, my projects include developing a
              Master Patient Index for hospitals and a budget management app
              named Spendee.
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
