// src/context/ProjectsContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProjectsContext = createContext();

export const useProjects = () => useContext(ProjectsContext);

export const ProjectsProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/chanawh/repos');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          throw new Error('Data format is not an array');
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProjects();
  }, []);

  return (
    <ProjectsContext.Provider value={{ projects, error }}>
      {children}
    </ProjectsContext.Provider>
  );
};
