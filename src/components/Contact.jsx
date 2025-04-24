// Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact-content">
        <h2 className="section-title">Contact</h2>
        <p>If you'd like to connect for work opportunities or collaboration, feel free to reach out!</p>
        <ul className="contact-list">
          <li><strong>Email:</strong> <a href="mailto:soniakurian015@gmail.com">soniakurian015@gmail.com</a></li>
          <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/sonia-kurian-4a7441197" target="_blank" rel="noopener noreferrer">linkedin.com/in/sonia-kurian-4a7441197</a></li>
          <li><strong>GitHub:</strong> <a href="https://github.com/soniakurian015/JavaSpringBootProjects" target="_blank" rel="noopener noreferrer">github.com/soniakurian015</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;