import React from 'react';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'automativeMechatronics',
      description: 'Developed a fully functional online selling website as part of the final year project. The website allows users to browse, search, and purchase CNC products online. Role: Front-End Developer',
    },
    {
      title: 'Fitness Management System',
      description: 'Developed a fully functional online selling website as part of the final year project. The website allows users to browse, search, and purchase CNC products online. Role: Front-End Developer',
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project-item" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
