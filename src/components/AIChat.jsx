import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../css/AIChat.css";

const KNOWLEDGE_BASE = [
  {
    keywords: ["experience", "capgemini", "current", "work", "job"],
    answer: "Manan is an Application Consultant / Software Engineer at Capgemini, working on Dialogflow CX and Google Cloud enhancements while learning Gemini Enterprise for Customer Experience (GECX) for an enterprise CCaaS platform. His work includes routing analysis, webhook/API debugging, cloud logging, BigQuery, Looker, and release validation."
  },
  {
    keywords: ["project", "rag", "ai", "agent", "conversational", "cohere", "faiss"],
    answer: "His strongest AI project is a multi-agent conversational AI platform with FastAPI, React, SQLite, SQLAlchemy, Cohere, and FAISS. It includes 7 API endpoints and a 6-stage RAG pipeline for history retrieval, semantic search, contextual prompting, response generation, and logging."
  },
  {
    keywords: ["cloud", "aws", "gcp", "google", "certification", "certified"],
    answer: "Manan has AWS Cloud Practitioner, AWS Certified Developer - Associate, and Google Associate Cloud Engineer credentials listed on his latest resume. His practical cloud work includes AWS EC2, Docker deployments, Dialogflow CX, GECX learning, Cloud Run, Cloud Logging, and BigQuery."
  },
  {
    keywords: ["skill", "stack", "technology", "backend", "frontend", "database"],
    answer: "His core stack includes Python, Java, JavaScript, TypeScript, SQL, React, FastAPI, Spring Boot, Node.js, PostgreSQL, MySQL, MongoDB, SQLite, Docker, GitHub Actions, AWS, and GCP."
  },
  {
    keywords: ["education", "school", "njit", "gpa", "degree"],
    answer: "Manan completed an M.S. in Computer Science at NJIT with a 3.9/4.0 GPA and a B.E. in Computer Engineering from Charusat University with a 9.75/10 GPA."
  },
  {
    keywords: ["contact", "email", "phone", "linkedin", "github", "resume"],
    answer: "You can contact Manan at mananshah2602@gmail.com, view his GitHub at github.com/Manan2606, or download the latest resume from the Resume button on this portfolio."
  }
];

const DEFAULT_ANSWER = "I can answer questions about Manan's experience, projects, skills, education, certifications, or contact details. For anything very specific, use the contact form so Manan can respond directly.";

const getPortfolioAnswer = (question) => {
  const normalized = question.toLowerCase();
  const match = KNOWLEDGE_BASE.find((entry) => entry.keywords.some((keyword) => normalized.includes(keyword)));
  return match ? match.answer : DEFAULT_ANSWER;
};

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi, I'm Manan's portfolio assistant. Ask about his experience, projects, skills, or certifications." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  useEffect(() => {
    const handleOpenChat = () => {
      setIsOpen(true);
      const chatWindow = document.querySelector('.chat-window');
      if (chatWindow) {
        chatWindow.classList.remove('pulse-animation');
        void chatWindow.offsetWidth;
        chatWindow.classList.add('pulse-animation');
      }
    };
    window.addEventListener('openAIChat', handleOpenChat);
    return () => window.removeEventListener('openAIChat', handleOpenChat);
  }, []);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const answer = getPortfolioAnswer(input);
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    window.setTimeout(() => {
      setMessages((prev) => [...prev, { role: "assistant", content: answer }]);
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="ai-chat-container">
      <button
        className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open Portfolio Assistant"
      >
        <FaRobot className="bot-icon" />
        <span className="tooltip">Ask Portfolio Assistant</span>
      </button>

      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="header-info">
            <FaRobot className="header-icon" />
            <span>Portfolio Assistant</span>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)} aria-label="Close assistant">
            <FaTimes />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`message ${msg.role}`}>
              <div className="message-bubble">
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="message-bubble loading-bubble">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input-area" onSubmit={handleSend}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about projects, cloud, skills..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()} aria-label="Send message">
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;


