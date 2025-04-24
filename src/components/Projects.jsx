// Projects.jsx
import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="projects-content">
        <h2 className="section-title">Projects</h2>
        <div className="project-card">
          <h3>Java Spring Boot CRM Backend</h3>
          <p>A backend CRM system built using Java, Spring Boot, and Hibernate. Features include customer data management, authentication, and RESTful APIs for client integration.</p>
          <a href="https://github.com/soniakurian015/JavaSpringBootProjects" target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
