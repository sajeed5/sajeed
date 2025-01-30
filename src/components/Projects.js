import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Automated Car Parking System',
      description:
        'Developed a car parking system using OCR for license plate recognition. Integrated Fast2sms API for SMS booking notifications.',
      github: 'https://github.com/SAJEED006/Automated-Parking-System-Using-Machine-Learning', // Add GitHub link here
    },
    {
      title: 'Search My Block During Exams',
      description:
        'Designed and deployed a website to assist students in locating exam blocks. Optimized performance using HTML, CSS, and JavaScript.',
      github: 'https://blockfinder.vercel.app', // Add GitHub link here
    },
  ];

  return (
    <div className="section projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            {/* GitHub Button for Demo */}
            <a 
              href={project.github} 
              className="github-button" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              DEMO
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
