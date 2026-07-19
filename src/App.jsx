import { useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import AIChat from "./components/AIChat";
import CommandCenter from "./components/CommandCenter";
import ResumeModal from "./components/ResumeModal";

function App() {
  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="right-align">
        <About />
        <Experience />
        <Projects />
        <Education />
        <Skills />
        <Certifications />
        <ContactForm />
      </main>
      <Footer />
      <AIChat />
      <CommandCenter />
      <ResumeModal />
      <Analytics />
    </div>
  );
}

export default App;
