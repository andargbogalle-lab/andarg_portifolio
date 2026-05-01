import React from 'react';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Restaurant & Hotel Management System',
      description: 'A comprehensive management system for restaurants and hotels featuring order management, table reservations, room booking, inventory tracking, and billing system.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Bus Ticket Management System',
      description: 'An efficient ticketing system for bus transportation with features for booking tickets, route management, seat selection, and payment processing.',
      technologies: ['React', 'Node.js', 'MySQL', 'Express'],
      image: '/images/bus.jpg'
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <p className="section-subtitle">Check out some of my recent work</p>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
