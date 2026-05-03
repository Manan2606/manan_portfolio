import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes, FaFilePdf, FaMoon, FaRobot, FaEnvelope, FaCode, FaUser, FaSun } from 'react-icons/fa';
import '../css/CommandCenter.css';

const CommandCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('openCommandCenter', handleOpen);
    return () => window.removeEventListener('openCommandCenter', handleOpen);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    } else {
      setSearchQuery('');
    }
  }, [isOpen]);

  const handleAction = (action) => {
    setIsOpen(false);
    action();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('mananshah2602@gmail.com');
    alert('Email copied to clipboard!');
  };

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const openChat = () => {
    window.dispatchEvent(new CustomEvent('openAIChat'));
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -120; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const ACTIONS = [
    { id: 'resume', title: 'View Resume', icon: <FaFilePdf />, action: () => window.open('https://drive.google.com/file/d/1YbcfJ7SlviOGHwPQdEcg8sk5HwKWPahK/view?usp=sharing', '_blank') },
    { id: 'theme', title: 'Toggle Theme', icon: <FaMoon />, action: toggleTheme },
    { id: 'chat', title: 'Open AI Assistant', icon: <FaRobot />, action: openChat },
    { id: 'email', title: 'Copy Email', icon: <FaEnvelope />, action: copyEmail },
    { id: 'about', title: 'Go to About', icon: <FaUser />, action: () => scrollToSection('about') },
    { id: 'projects', title: 'Go to Projects', icon: <FaCode />, action: () => scrollToSection('projects') },
  ];

  const filteredActions = ACTIONS.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className={`cmd-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
      <div className="cmd-modal" onClick={(e) => e.stopPropagation()}>
        
        <div className="cmd-header">
          <FaSearch className="cmd-search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="cmd-input"
            placeholder="Type a command or search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="cmd-close" onClick={() => setIsOpen(false)}>
            <FaTimes />
            <span className="cmd-esc">ESC</span>
          </button>
        </div>

        <div className="cmd-body">
          {filteredActions.length > 0 ? (
            <div className="cmd-actions-list">
              <div className="cmd-section-title">Quick Actions</div>
              {filteredActions.map((action) => (
                <button key={action.id} className="cmd-action-btn" onClick={() => handleAction(action.action)}>
                  <div className="cmd-action-icon">{action.icon}</div>
                  <span>{action.title}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="cmd-empty">No results found for &quot;{searchQuery}&quot;</div>
          )}
        </div>

      </div>
    </div>
  );
};

export default CommandCenter;
