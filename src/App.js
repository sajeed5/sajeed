import React from 'react';
import './index.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import myimage from './images/sajeed.JPG'
import myresume from './images/sajeedmalagi.pdf'


const App = () => {
  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
  <div className="navbar-container">
    <h1 className="navbar-title">Sajeed Malagi</h1>
    <ul className="navbar-links">
      <li><a href="#about" className="hover-effect">About</a></li>
      <li><a href="#skills" className="hover-effect">Skills</a></li>
      <li>
        <a 
          href={myresume} 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover-effect"
        >
          Resume
        </a>
      </li>  {/* Opens Resume in a New Tab */}
      <li><a href="#projects" className="hover-effect">Projects</a></li>
      <li><a href="#contact" className="hover-effect">Contact</a></li>
    </ul>
  </div>
</nav>


      {/* Header Section */}
      <header className="header">
  <div className="header-image">
    <img src={myimage} alt="Sajeed Malagi" />
  </div>
  <div className="header-content">
    <h1>Sajeed Malagi</h1>
    <p>Entry-Level Software Developer | Web Developer</p>
  </div>
</header>


      {/* Main Content */}
      <main>
        <section id="about" className="colored-section about-section">
          <About />
        </section>
        <section id="skills" className="colored-section skills-section">
          <Skills />
        </section>



        <section id="projects" className="colored-section projects-section">
          <Projects />
        </section>
        <section id="contact" className="colored-section contact-section">
          <Contact />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Sajeed Malagi. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
