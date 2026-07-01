import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaExternalLinkAlt, FaGithub, FaFolderOpen } from 'react-icons/fa';
import './Project.css';

const Project = () => {
  const projectList = [
    {
      id: 1,
      title: "TenzSoft Official Website",
      category: "Core Production",
      image: "/TenzSoft-Portfolio.jpeg", 
      tags: ["PHP", "Bootstrap", "JavaScript ES6", "CSS3 Glow"],
      liveLink: "https://tenzsoft.com/", // Linked directly as requested
      githubLink: "https://tenzsoft.com/"
    },
    {
      id: 2,
      title: "Gujjar Community",
      category: "FrontEnd Architecture",
      image: "/gujjarcomuunity.jpeg", 
      tags: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
      liveLink: "https://gujjarcommunity.com/",
      githubLink: "https://gujjarcommunity.com/"
    },
    {
      id: 3,
      title: "Hooria Consultancy",
      category: "Full Stack FrontEnd",
      image: "/Hooria.jpeg",
      tags: ["PHP", "Bootstrap", "JavaScript", "SQL Layouts"],
      liveLink: "https://hooriaconsultancy.com/",
      githubLink: "https://hooriaconsultancy.com/"
    },
    {
      id: 4,
      title: "Portfolio Website",
      category: "React Ecosystem",
      image: "/Porfolio.jpeg",
      tags: ["React.js", "Bootstrap", "Interactive UI"],
      liveLink: "https://tenzsoft.com/",
      githubLink: "https://tenzsoft.com/"
    },
    {
      id: 5,
      title: "Friggaskrädderikemtvätt",
      category: "CMS Development",
      image: "/frigga.jpeg",
      tags: ["WordPress", "Elementor", "Premium Engine"],
      liveLink: "https://xn--friggaskrdderikemtvtt-e2bk.se/",
      githubLink: "https://xn--friggaskrdderikemtvtt-e2bk.se/"
    },
    {
      id: 6,
      title: "Tyre Touch Plus",
      category: "FrontEnd Solutions",
      image: "/tyre.jpeg",
      tags: ["PHP", "Bootstrap", "Procedural Flow"],
      liveLink: "https://tyretouchplus.co.uk/",
      githubLink: "https://tyretouchplus.co.uk/"
    },
    {
      id: 7,
      title: "LotusFituk",
      category: "CMS Architecture",
      image: "/lotus.jpeg",
      tags: ["WordPress", "Elementor", "E-Commerce Fluid"],
      liveLink: "https://lotusfituk.com/",
      githubLink: "https://lotusfituk.com/"
    }
  ];

  return (
    <section className="projects-cyber-dark-section py-5 w-100" id="projects">
      <Container fluid className="px-md-5 position-relative z-index-top">
        
        {/* Section Header */}
        <div className="text-center mb-5 element-fade-in-up">
          <h2 className="fw-bold display-5 mb-2"> 
            <span className="text-purple-neon-gradient">Featured Work Systems</span>
          </h2>
          <div className="project-glow-bar mx-auto"></div>
          <p className="project-sub-title text-muted mt-3">A showcase of my recent work and technical engineering setups.</p>
        </div>

        {/* Syncs perfectly with Navbar limits */}
        <div className="projects-navbar-aligned-grid mx-auto">
          <Row className="g-4 justify-content-center">
            {projectList.map((project) => (
              <Col key={project.id} sm={12} md={6} lg={4} className="d-flex">
                
                <div className="cyber-project-card w-100">
                  <div className="card-top-glow-wire"></div>
                  
                  {/* Media Core Container */}
                  <div className="project-img-container position-relative overflow-hidden">
                    <img 
                      src={process.env.PUBLIC_URL + project.image} 
                      alt={project.title} 
                      className="img-fluid project-dynamic-media" 
                    />
                    
                    {/* Modern Action Overlay Layer */}
                    <div className="project-cyber-overlay d-flex align-items-center justify-content-center">
                      <div className="overlay-action-row d-flex gap-3">
                        <a href={project.liveLink} target="_blank" rel="noreferrer" className="action-circle-link neon-live" title="Live System Launch">
                          <FaExternalLinkAlt />
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noreferrer" className="action-circle-link neon-git" title="View Code Repository">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Metadata/Details Deck */}
                  <div className="project-details p-4 text-start">
                    <div className="d-flex align-items-center justify-content-between mb-2">
                      <span className="category-matrix-text text-uppercase fw-bold">{project.category}</span>
                      <FaFolderOpen className="folder-system-indicator" />
                    </div>
                    
                    <h4 className="fw-bold project-core-title mb-3">{project.title}</h4>
                    
                    {/* Component Infrastructure Tags */}
                    <div className="tech-badges-flow-deck d-flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag, idx) => (
                        <Badge key={idx} className="cyber-infrastructure-pill py-1 px-2.5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                </div>

              </Col>
            ))}
          </Row>
        </div>

      </Container>
    </section>
  );
};

export default Project;