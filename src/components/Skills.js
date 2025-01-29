import React from 'react';

const Skills = () => {
  const skills = [
    'Python',
    'Javascript(ES6)',
    'React',
    'SQL',
    'HTML',
    'CSS',
    'VS Code',
    'Linux',
    'Node',
    'GitHub',
    'Windows',
    'postman',
    'Git',
    'Networking',

  ];

  return (
    <div className="section skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
