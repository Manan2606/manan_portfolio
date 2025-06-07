import React from "react";
import "../css/About.css";
import NewPhoto from "../Resume_Profile.jpg";
import DownloadButton from "./DownloadButton";

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
            alt="Manan Shah - Full Stack Developer"
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
            <span className="about-title">Full Stack Developer</span>
          </div>
          <div className="about-text-modern">
            <p className="about-description">
              I’m a passionate <strong>Full Stack Developer</strong> with a
              <strong> Master’s in Computer Science</strong> from{" "}
              <strong>NJIT</strong> (GPA: 3.9). I specialize in building
              scalable, cloud-based solutions using technologies like{" "}
              <strong>React.js, Node.js, FastAPI, and Laravel</strong>. My
              experience spans across{" "}
              <strong>backend systems, REST APIs</strong>,
              <strong>responsive UI/UX</strong>, and <strong>DevOps</strong>.
            </p>
            <p className="about-description">
              In my professional roles at <strong>H2 Techno World</strong> and{" "}
              <strong>Crown Software</strong>, I delivered systems that
              significantly improved performance. Highlights include a tax
              invoice system that reduced manual errors by 30% and database
              optimizations that cut query times by 40%.
            </p>
            <div className="about-projects">
              <p className="about-description">
                <strong>Highlighted Projects:</strong>
              </p>
              <ul className="project-list" role="list">
                <li>
                  <strong>User Management System</strong>: Built with FastAPI
                  and PostgreSQL, including JWT security, role-based access, and
                  HATEOAS API integration. Dockerized for scalable deployment.
                </li>
                <li>
                  <strong>Hospital Management App</strong>: Created using Vue.js
                  and Laravel to manage 1,000+ patient records, with PDF billing
                  and MySQL integration.
                </li>
                <li>
                  <strong>Climate Data Analysis</strong>: Processed Brazil’s
                  weather data using Hadoop MapReduce and AWS, automated with
                  Oozie.
                </li>
                <li>
                  <strong>Prepstation Exam Platform</strong>: A React.js +
                  Node.js web platform with exam creation, grading, and result
                  tracking.
                </li>
                <li>
                  <strong>Stroke & Lung Cancer Detection</strong>: CNN-based
                  models using Python and TensorFlow for healthcare diagnosis
                  (85–88% accuracy).
                </li>
              </ul>
              <p className="about-description">
                I also bring hands-on experience with{" "}
                <strong>
                  Docker, GitHub CI/CD, TensorFlow, PostgreSQL, MySQL,
                </strong>{" "}
                and
                <strong> AWS Cloud</strong>. I enjoy solving problems that
                matter — whether it's accelerating data processing or improving
                health tech through AI.
              </p>
            </div>
            <DownloadButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
