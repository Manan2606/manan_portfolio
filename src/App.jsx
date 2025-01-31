import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="right-align">
        <About />
        <Education />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
