// src/components/ProjectModal.js
import React from 'react';
import Modal from 'react-modal';
import './ProjectModal.css'; // Optional: Your custom styles

const ProjectModal = ({ isOpen, onRequestClose, project }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Project Details">
      <button onClick={onRequestClose} className="close-button">Close</button>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <img src={project.image} alt={project.title} />
    </Modal>
  );
};

export default ProjectModal;
