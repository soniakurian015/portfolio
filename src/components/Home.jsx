// Hero.jsx
import React from 'react';
import './Home.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <p className="intro">Hi, my name is</p>
        <h1 className="name">Sonia Kurian.</h1>
        <h2 className="tagline">I build backend systems with Java & Spring Boot.</h2>
        <p className="summary">
          I'm a Java Spring Boot developer specializing in building (and occasionally designing)
          backend systems and RESTful APIs. Currently, I’m exploring freelance opportunities.
        </p>
        <a href="#projects" className="btn">Check out my work</a>
      </div>
    </section>
  );
};

export default Hero;
