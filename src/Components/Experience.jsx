import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaBriefcase, FaCheckCircle, FaCode, FaRocket } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-section py-5" id="experience">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6"> <span className="text-purple">My Experience</span></h2>
          <div className="heading-underline mx-auto"></div>
          <p className="text-muted mt-3">The only source of knowledge is experience.</p>
        </div>

        <Row className="justify-content-center">
          <Col lg={9}>
            {/* Main Animated Card */}
            <div className="experience-card shadow-lg p-4 p-md-5 position-relative overflow-hidden">
              
              {/* Background Animated Glow */}
              <div className="glow-effect"></div>

              <Row className="align-items-center position-relative">
                {/* Company Logo/Icon Side */}
                <Col md={4} className="text-center border-end-md mb-4 mb-md-0">
                  <div className="company-logo-wrapper mx-auto mb-3">
                    <img src="/TenzSofft.png" alt="TenzSoft" className="img-fluid main-logo" />
                  </div>
                  <h4 className="fw-bold mb-0"><a  href="https://tenzsoft.com" target="_blank"      className="company-link">TenzSoft</a></h4>
                  <p className="text-muted small">Gujranwala, Pakistan</p>
                  <Badge bg="none" className="badge-date p-2 px-3 rounded-pill">
                    2025 - Present
                  </Badge>
                </Col>

                {/* Role & Details Side */}
                <Col md={8} className="ps-md-5">
                  <div className="d-flex align-items-center mb-2">
                    <FaRocket className="text-purple me-2 bounce-animation" />
                    <h3 className="fw-bold text-dark mb-0">Web Developer</h3>
                  </div>
                  
                  <p className="experience-text text-muted">
                    Contributing as a Core Web Developer, focusing on building high-performance 
                    business websites and dynamic web applications.
                  </p>

                  <ul className="list-unstyled tech-tasks mt-4">
                    <li className="mb-2 d-flex align-items-center">
                      <FaCheckCircle className="text-purple me-2" /> 
                      <span>Developing responsive UI with <b>React & Bootstrap</b></span>
                    </li>
                    <li className="mb-2 d-flex align-items-center">
                      <FaCheckCircle className="text-purple me-2" /> 
                      <span>Customizing WordPress themes and PHP backends</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <FaCheckCircle className="text-purple me-2" /> 
                      <span>Optimizing website speed and SEO performance</span>
                    </li>
                  </ul>

                  {/* Skills Used Tags */}
                  <div className="mt-4 d-flex flex-wrap gap-2">
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">PHP</span>
                    <span className="skill-tag">WordPress</span>
                    <span className="skill-tag">JavaScript</span>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;