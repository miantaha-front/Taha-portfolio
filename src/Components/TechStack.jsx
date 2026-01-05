import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap, SiGithub,SiPhp, SiCplusplus, SiOpenjdk, SiMysql } from 'react-icons/si';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    { name: "HTML5", icon: <SiHtml5 />, color: "#E34F26" },
    { name: "CSS3", icon: <SiCss3 />, color: "#1572B6" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "React JS", icon: <SiReact />, color: "#61DAFB" },
    { name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
    { name: "PHP", icon: <SiPhp />, color: "#777BB4" }, 
    { name: "C++", icon: <SiCplusplus />, color: "#00599C" }, 
    { name: "Java", icon: <SiOpenjdk />, color: "#ED8B00" },
    { name: "SQL", icon: <SiMysql />, color: "#4479A1" },
    { name: "GitHub", icon: <SiGithub />, color: "#181717" },
  ];

  return (
    <section className="tech-section py-5" id="skills">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6">My <span className="text-purple">Tech Stack</span></h2>
          <div className="heading-underline mx-auto"></div>
          <p className="text-muted mt-3">The modern tools and technologies I use to build amazing interfaces.</p>
        </div>

        <Row className="g-4 justify-content-center">
          {technologies.map((tech, index) => (
            <Col key={index} xs={6} md={4} lg={3}>
              <div className="tech-card">
                <div className="tech-icon" style={{ color: tech.color }}>
                  {tech.icon}
                </div>
                <h5 className="mt-3 fw-bold">{tech.name}</h5>
                <div className="hover-line"></div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default TechStack;