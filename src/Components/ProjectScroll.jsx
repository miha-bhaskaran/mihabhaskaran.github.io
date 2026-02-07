import React from 'react';
import './ProjectScroll.css';

const ProjectScroll = () => {
  // Dummy project data - you can replace this later with your actual projects
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of this project',
      year: '2024'
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of this project',
      year: '2024'
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of this project',
      year: '2023'
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'A brief description of this project',
      year: '2023'
    },
    {
      id: 5,
      title: 'Project Five',
      description: 'A brief description of this project',
      year: '2023'
    }
  ];

  return (
    <div className="project-scroll-container">
      <div className="project-scroll">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-year">{project.year}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectScroll;
