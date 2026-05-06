import React, { useState, useEffect } from 'react';
import { FaTimes, FaDownload } from 'react-icons/fa';
import '../css/ResumeModal.css';

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleEsc = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('openResume', handleOpen);
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('openResume', handleOpen);
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={() => setIsOpen(false)}>
      <div className="resume-modal-content animate-pop-in" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <h2 className="resume-modal-title">Manan Shah - Resume</h2>
          <div className="resume-modal-actions">
            <a 
              href="/Manan_Shah_Resume_05062026.pdf" 
              download="Manan_Shah_Resume.pdf" 
              className="resume-download-btn"
            >
              <FaDownload /> <span>Download</span>
            </a>
            <button className="resume-close-btn" onClick={() => setIsOpen(false)}>
              <FaTimes />
            </button>
          </div>
        </div>
        <div className="resume-modal-body">
          {/* Native HTML Object to load the PDF seamlessly without heavy libraries */}
          <object 
            data="/Manan_Shah_Resume_05062026.pdf#view=FitH" 
            type="application/pdf" 
            width="100%" 
            height="100%"
            className="resume-pdf-viewer"
          >
            <div className="resume-fallback">
              <p>Your browser does not support inline PDFs.</p>
              <a href="/Manan_Shah_Resume_05062026.pdf" className="resume-download-btn fallback-btn">
                Download PDF Instead
              </a>
            </div>
          </object>
        </div>
      </div>
    </div>
  );
};

export default ResumeModal;
