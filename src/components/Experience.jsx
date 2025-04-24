// Experience.jsx
import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience-content">
        <h2 className="section-title">Experience</h2>
        <div className="experience-card">
          <h3>IBS Software - Senior Product Engineer</h3>
          <span className="duration">Kochi, India | Nov 2021 – Nov 2024</span>
          <ul>
            <li>Proficient in Java, Spring Boot, Hibernate, REST APIs, and Microservices, with hands-on experience in building and maintaining scalable backend systems.</li>
            <li>Worked on the iCargo logistics platform, delivering enterprise-grade features for clients including Singapore Airlines, Virgin Australia, and Bangkok Airways.</li>
            <li>Designed and implemented RESTful APIs using Spring Boot and Hibernate, following best practices for modularity, performance, and maintainability.</li>
            <li>Contributed to system optimization by fine-tuning database interactions and resolving performance bottlenecks in critical modules.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;