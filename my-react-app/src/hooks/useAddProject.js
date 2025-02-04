// src/hooks/useAddProject.js
import { useState } from 'react';
import { useProjects } from '../context/ProjectsContext';

const useAddProject = () => {
  const { projects, setProjects } = useProjects();
  const [error, setError] = useState(null);

  const addProject = async (newProject) => {
    const optimisticProjects = [...projects, newProject];
    setProjects(optimisticProjects);

    try {
      const response = await fetch('https://api.github.com/users/chanawh/repos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProject),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const savedProject = await response.json();
      setProjects([...projects, savedProject]);
    } catch (error) {
      setProjects(projects);
      setError(error.message);
    }
  };

  return { addProject, error };
};

export default useAddProject;
