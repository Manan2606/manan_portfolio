// src/components/DownloadButton.jsx
import React from "react";
import "../css/DownloadButton.css";

const DownloadButton = () => {
  return (
    <div className="download-button-container">
      <a
        href="https://drive.google.com/file/d/13m6kX3I6IM8Kc0lnJ7X2wfFIT5rGWY7W/view?usp=drive_link"
        className="download-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
};

export default DownloadButton;
