// src/components/DownloadButton.jsx
import React from "react";
import "../css/DownloadButton.css";

const DownloadButton = () => {
  return (
    <div className="download-button-container">
      <a
        href="https://drive.google.com/file/d/1rMZKr7Whj8V5Ef-tAEeWTthtwpHSkb_S/view?usp=drive_link"
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
