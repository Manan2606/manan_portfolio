import React, { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "../css/ContactForm.css";

const ContactForm = () => {
  const [step, setStep] = useState(0);
  const [inputData, setInputData] = useState({ name: "", email: "", message: "" });
  const [currentInput, setCurrentInput] = useState("");
  const [history, setHistory] = useState([
    { type: "system", text: "Welcome to MananOS v2.0.4" },
    { type: "system", text: "Establishing secure connection..." },
    { type: "system", text: "Connection established." },
    { type: "prompt", text: "guest@portfolio:~$ Enter your name:" }
  ]);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  // Keep focus on input when clicking terminal
  const handleTerminalClick = () => {
    if (step < 3) {
      inputRef.current?.focus();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (!currentInput.trim() && step < 3) return;

      const newHistory = [...history, { type: "input", text: currentInput }];
      
      if (step === 0) {
        // Name
        setInputData({ ...inputData, name: currentInput });
        newHistory.push({ type: "prompt", text: "guest@portfolio:~$ Enter your email:" });
        setStep(1);
      } else if (step === 1) {
        // Email validation
        if (!/^\S+@\S+\.\S+$/.test(currentInput)) {
          newHistory.push({ type: "error", text: "bash: invalid email format. Please try again." });
          newHistory.push({ type: "prompt", text: "guest@portfolio:~$ Enter your email:" });
        } else {
          setInputData({ ...inputData, email: currentInput });
          newHistory.push({ type: "prompt", text: "guest@portfolio:~$ Type your message:" });
          setStep(2);
        }
      } else if (step === 2) {
        // Message
        setInputData({ ...inputData, message: currentInput });
        newHistory.push({ type: "system", text: "Encrypting payload..." });
        newHistory.push({ type: "system", text: "Transmitting to Manan Shah..." });
        setStep(3);
        sendEmail(inputData.name, inputData.email, currentInput, newHistory);
      } else if (step === 5) {
        // Retry logic on error
        if (currentInput.toLowerCase() === 'y') {
          newHistory.push({ type: "prompt", text: "guest@portfolio:~$ Type your message:" });
          setStep(2);
        } else {
          newHistory.push({ type: "system", text: "Session terminated." });
          setStep(4);
        }
      }

      setHistory(newHistory);
      setCurrentInput("");
    }
  };

  const sendEmail = (name, email, message, currentHistory) => {
    // We must use emailjs.send since we aren't using a <form> ref anymore
    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setTimeout(() => {
            setHistory(prev => [
              ...prev,
              { type: "success", text: "[OK] Payload delivered successfully." },
              { type: "system", text: "Connection closed." }
            ]);
            setStep(4);
          }, 1000); // Artificial delay for cool terminal feel
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setHistory(prev => [
            ...prev,
            { type: "error", text: `[FAILED] Error: ${error.text || 'Unable to reach server.'}` },
            { type: "prompt", text: "guest@portfolio:~$ Try sending again? (y/n)" }
          ]);
          setStep(5);
        }
      );
  };

  return (
    <section id="contact" className="terminal-contact-section">
      <h2 id="contact-heading" className="terminal-heading">Initialize Connection</h2>
      
      <div className="terminal-window" onClick={handleTerminalClick}>
        
        {/* Terminal Header (macOS style) */}
        <div className="terminal-header">
          <div className="terminal-buttons">
            <span className="t-btn close-btn"></span>
            <span className="t-btn min-btn"></span>
            <span className="t-btn max-btn"></span>
          </div>
          <div className="terminal-title">bash - contact_manan.sh</div>
        </div>

        {/* Terminal Body */}
        <div className="terminal-body" ref={bodyRef}>
          {history.map((line, index) => (
            <div key={index} className={`terminal-line ${line.type}`}>
              {line.type === "input" ? `> ${line.text}` : line.text}
            </div>
          ))}
          
          {(step < 3 || step === 5) && (
            <div className="terminal-input-line">
              <span className="terminal-cursor-prompt">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="terminal-input"
                autoFocus
                autoComplete="off"
                spellCheck="false"
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
