// src/components/About.js
import React from 'react';
import './About.css';
import Projects from './Projects';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about">
      <div className="hero" style={{ backgroundImage: 'url(/path/to/your/image.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>Hello! I'm Andrew</motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>A passionate developer with expertise in Python and JavaScript</motion.p>
        <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="cta-button">Explore My Projects</motion.button>
      </div>
      <div className="content">
        <section className="bio">
          <h2>About Me</h2>
          <p>
            I love building applications that solve real-world problems and enhance user experiences.
            When I'm not coding, you can find me [Your Hobbies/Interests].
          </p>
        </section>
        <section className="skills">
          <h2>My Skills</h2>
          <div className="skill">
            <span>JavaScript</span>
            <div className="progress-bar"><div className="progress" style={{ width: '90%' }}></div></div>
          </div>
          <div className="skill">
            <span>React</span>
            <div className="progress-bar"><div className="progress" style={{ width: '85%' }}></div></div>
          </div>
          {/* Add more skills as needed */}
        </section>
        <section className="hobbies">
          <h2>My Hobbies</h2>
          <div className="hobby">
            <p>Hobby Description</p>
          </div>
          {/* Add more hobbies as needed */}
        </section>
        <section className="projects">
          <h2>My Projects</h2>
          <Projects />
        </section>
        <section className="contact">
          <h2>Contact Me</h2>
          <p>Feel free to reach out to me on <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="mailto:your.email@example.com">email</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default About;
