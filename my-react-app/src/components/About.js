// src/components/About.js
import React from 'react';
import './About.css';
import Projects from './Projects';

const About = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <p>
        Hello! I'm [Your Name], a passionate developer with expertise in [Your Skills].
        I love building applications that solve real-world problems and enhance user experiences.
        When I'm not coding, you can find me [Your Hobbies/Interests].
      </p>
      <Projects />
    </div>
  );
};

export default About;