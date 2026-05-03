import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import "../css/AIChat.css";

const SYSTEM_PROMPT = `You are Manan's AI Assistant, built to represent Manan Shah, a Full-Stack & AI Engineer. 
Your goal is to answer questions about his portfolio, skills, experience, and projects in a friendly, professional, and slightly enthusiastic tone.
Here is some information about Manan:
- **Education**: M.S. in Computer Science at NJIT (GPA 4.0), B.Tech in Computer Engineering at Charusat University.
- **Skills**: React, Node.js, Python, FastAPI, Docker, AWS, SQL, Machine Learning (TensorFlow).
- **Experience**: Software Engineer at H2 Techno World (built full-stack inventory management, CI/CD, AWS deployments). Software Developer at Crown Software.
- **Projects**: Prepstation (online exam web app), Lung Cancer Detection (CNN model, 85% accuracy), Multi-Agentic Conversational AI System, User Management System (FastAPI, Docker).
- **Certifications**: AWS Certified Cloud Practitioner, AWS Cloud Developer Associate.
Keep answers concise (under 3 sentences) unless asked for details. If you don't know the answer, gracefully say you're not sure but they can contact Manan directly using the Contact form.`;

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Manan's AI clone. Ask me anything about his experience, projects, or skills!" }
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
      // Add a quick attention animation class if needed
      const chatWindow = document.querySelector('.chat-window');
      if (chatWindow) {
        chatWindow.classList.remove('pulse-animation');
        void chatWindow.offsetWidth; // trigger reflow
        chatWindow.classList.add('pulse-animation');
      }
    };
    window.addEventListener('openAIChat', handleOpenChat);
    return () => window.removeEventListener('openAIChat', handleOpenChat);
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const chatHistory = messages.map(m => ({ role: m.role, content: m.content }));
      
      const response = await axios.post(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          model: "llama-3.1-8b-instant", // Fast open source model
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...chatHistory,
            userMessage
          ],
          temperature: 0.7,
          max_tokens: 150,
        },
        {
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
            "Content-Type": "application/json"
          }
        }
      );

      const aiMessage = {
        role: "assistant",
        content: response.data.choices[0].message.content
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("AI Chat Error:", error);
      let errorText = "Oops! I couldn't reach the server right now. Please try again later.";
      
      if (error.response && error.response.status === 401) {
          errorText = "Oops! The API key is invalid or not set up yet. Manan will fix this soon!";
      }

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: errorText }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="ai-chat-container">
      {/* Chat Button */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'hidden' : ''}`} 
        onClick={() => setIsOpen(true)}
        aria-label="Open AI Assistant"
      >
        <FaRobot className="bot-icon" />
        <span className="tooltip">Ask Manan AI</span>
      </button>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <div className="header-info">
            <FaRobot className="header-icon" />
            <span>Manan's AI Assistant</span>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
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
            placeholder="Ask about my projects..."
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !input.trim()}>
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AIChat;
