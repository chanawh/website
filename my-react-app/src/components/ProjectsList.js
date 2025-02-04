// src/components/ProjectsList.js
import React from 'react';

const ProjectsList = ({ projects }) => (
  <ul>
    {projects.map(project => (
      <li key={project.id}>
        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
          {project.name}
        </a>
      </li>
    ))}
  </ul>
);

export default ProjectsList;
