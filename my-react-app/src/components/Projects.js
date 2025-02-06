// src/components/Projects.js
import React, { Suspense, useState } from 'react';
import { ProjectsProvider, useProjects } from '../context/ProjectsContext';
import ProjectModal from './ProjectModal'; // Import the ProjectModal component
import './Projects.css';

const ProjectsList = React.lazy(() => import('./ProjectsList')); // Lazy load ProjectsList

const Projects = () => {
  const { projects, error } = useProjects();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedProject, setSelectedProject] = useState(null); // State for selected project

  const filteredProjects = projects
    .filter(project =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

  if (error) {
    return <div className="projects-error">Error: {error}</div>;
  }

  return (
    <div className="projects">
      <h3>My Projects</h3>
      <input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="projects-search"
      />
      <div className="projects-sort">
        <label>Sort by name: </label>
        <select value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProjectsList
          projects={filteredProjects}
          onProjectClick={project => setSelectedProject(project)} // Handle project click
        />
      </Suspense>
      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onRequestClose={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}
    </div>
  );
};

const ProjectsContainer = () => (
  <ProjectsProvider>
    <Projects />
  </ProjectsProvider>
);

export default ProjectsContainer;
