import React from 'react';
import './ProjectsList.css'; // Import the CSS file

const ProjectsList = ({ projects, onProjectClick }) => (
  <ul className="projects-list">
    {projects.map(project => (
      <li key={project.id} className="projects-item" onClick={() => onProjectClick(project)}>
        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
      </li>
    ))}
  </ul>
);

export default ProjectsList;
