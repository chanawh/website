// src/components/ProjectCarousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProjectCarousel.css'; // Optional: Your custom styles

const ProjectCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const projects = [
    { id: 1, title: 'Project 1', image: 'link_to_project_image_1' },
    { id: 2, title: 'Project 2', image: 'link_to_project_image_2' },
    { id: 3, title: 'Project 3', image: 'link_to_project_image_3' },
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {projects.map(project => (
          <div key={project.id}>
            <h3>{project.title}</h3>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProjectCarousel;
