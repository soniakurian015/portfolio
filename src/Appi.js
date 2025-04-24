import React from "react";
import { Github, Linkedin } from "lucide-react";
import "./App.css";

function App() {
  return (
    <div className="app">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-text">
          <div className="logo">Sonia Kurian</div>
          <p className="intro">Hi, my name is</p>
          <h1>I build backend systems with Java & Spring Boot</h1>
          <p className="description">
            Experienced software engineer specializing in backend services using Java, Spring Boot, Hibernate, and Microservices.
          </p>
          <div className="social-links">
            <a href="https://github.com/soniakurian015/JavaSpringBootProjects" target="_blank" rel="noopener noreferrer">
              <Github className="social-icon" />
            </a>
            <a href="https://linkedin.com/in/sonia-kurian-4a7441197" target="_blank" rel="noopener noreferrer">
              <Linkedin className="social-icon" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h3>About Me</h3>
        <p>I'm a backend developer with proficiency in Java, Spring Boot, Hibernate, REST API, and Microservices. I have experience building and maintaining large-scale systems.</p>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience">
        <h3>Work Experience</h3>
        <div className="experience-item">
          <h4>IBS Software - Senior Product Engineer</h4>
          <ul>
            <li>Proficient in Java, Spring Boot, Hibernate, REST APIs, and Microservices, with hands-on experience in building and maintaining scalable backend systems.</li>
            <li>Worked on the iCargo logistics platform, delivering enterprise-grade features for clients including Singapore Airlines, Virgin Australia, and Bangkok Airways.</li>
            <li>Designed and implemented RESTful APIs using Spring Boot and Hibernate, following best practices for modularity, performance, and maintainability.</li>
            <li>Contributed to system optimization by fine-tuning database interactions and resolving performance bottlenecks in critical modules.</li>
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h3>Featured Project</h3>
        <div className="project-card">
          <h4>Project Name</h4>
          <p>Project description goes here.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <h3>Contact</h3>
        <p>Email: soniakurian015@gmail.com</p>
        <p>LinkedIn: <a href="https://linkedin.com/in/sonia-kurian-4a7441197" target="_blank" rel="noopener noreferrer">View LinkedIn</a></p>
        <p>GitHub: <a href="https://github.com/soniakurian015/JavaSpringBootProjects" target="_blank" rel="noopener noreferrer">View GitHub</a></p>
      </section>
    </div>
  );
}

export default App;
