import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Project.css';

const Project = () => {
  const projectList = [
    {
      id: 1,
      title: "Gujjar Community",
      category: "FrontEnd",
      image: "/GujjarComuunity.jpeg", // Apni project image ka link yahan lagayein
      tags: ["HTML5", "CSS3", "JavaScript" , "Bootstrap"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 2,
      title: "Hooria Consultancy",
      category: "FrontEnd",
      image: "/Hooria.jpeg",
      tags: ["php", "Bootstrap", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      id: 3,
      title: "Porfolio Website",
      category: "Frontend",
      image: "/Porfolio.jpeg",
      tags: ["React", "Bootstrap", "JavaScript"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section className="projects-section py-5" id="projects">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6"><span className="text-purple">PROJECTS</span></h2>
          <div className="heading-underline mx-auto"></div>
          <p className="text-muted mt-3">A showcase of my recent work and technical expertise.</p>
        </div>

        <Row className="g-4">
          {projectList.map((project) => (
            <Col key={project.id} md={6} lg={4}>
              <div className="project-card">
                <div className="project-img-container">
                  <img src={project.image} alt={project.title} className="img-fluid" />
                  <div className="project-overlay">
                    <div className="overlay-links">
                      <a href={project.liveLink} target="_blank" rel="noreferrer" title="Live Demo"><FaExternalLinkAlt /></a>
                      <a href={project.githubLink} target="_blank" rel="noreferrer" title="Source Code"><FaGithub /></a>
                    </div>
                  </div>
                </div>
                <div className="project-details p-4">
                  <span className="category-text">{project.category}</span>
                  <h4 className="fw-bold my-2 text-dark">{project.title}</h4>
                  <div className="tech-badges mt-3">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} className="me-2 bg-light-purple text-purple">{tag}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Project;