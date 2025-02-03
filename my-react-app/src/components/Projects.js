// src/components/Projects.js
import React, { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/chanawh/repos')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          throw new Error('Data format is not an array');
        }
      })
      .catch(error => {
        console.error('Error fetching projects:', error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div className="projects-error">Error: {error}</div>;
  }

  return (
    <div className="projects">
      <h3>My Projects</h3>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">
              {project.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;