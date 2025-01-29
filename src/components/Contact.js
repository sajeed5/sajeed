import React from 'react';

const Contact = () => {
  return (
    <div className="section contact-section">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-description">
        I'm open to collaborations and opportunities. Feel free to reach out!
      </p>
      <div className="contact-links">
        <a
           href="https://mail.google.com/mail/?view=cm&fs=1&to=jobs.sajeed@gmail.com"
           target="_blank"
           rel="noopener noreferrer"
          className="contact-button"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/cybersajeed/"
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/sajeed006"
          className="contact-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Contact;
