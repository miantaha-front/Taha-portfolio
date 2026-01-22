import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <section className="about-section py-5" id="About">
      <Container>
        <Row className="align-items-center">
          
          {/* Left Side: Image */}
          {/* Left Side: Professional Image Design */}
          <Col lg={5} className="mb-4 mb-lg-0">
            <div className="about-img-frame">
              {/* Circle nahi, balkay modern rectangular shape */}
              <img 
                src={process.env.PUBLIC_URL + "/aboutsecimg.webp"}
                alt="About Me" 
                className="img-fluid about-img" 
              />
              <div className="frame-decoration"></div>
            </div>
          </Col>

          {/* Right Side: Content */}
          <Col lg={7} className="ps-lg-5 text-dark text-start"> {/* text-start se alignment left ho jayegi */}
            <h4 className="about-title text-purple fw-bold text-uppercase ls-2 mb-3">
               <FaUser className="me-2" /> About Me
            </h4>
            <h2 className="display-5 fw-bold mb-4">
              I'm <span className="text-purple">Mian Taha</span>
            </h2>
            
            {/* Description - Left Aligned */}
            <p className="about-description mb-4 text-start">
              I'm Mian Taha, a dedicated Software Engineer and Web Developer. I specialize in building professional WordPress websites using themes, templates, and page builders. Additionally, as a Front-End Developer, I create custom code-based websites using React.js, PHP, and Bootstrap. Currently, I am expanding my expertise into App Development and strengthening my knowledge of Backend systems.
            </p>

            {/* Icons Section - Normal Size */}
            <Row className="mb-4 gy-4">
              <Col md={6}>
                <div className="d-flex align-items-center info-item">
                  <FaCalendarAlt className="text-purple me-3 icon-normal" />
                  <div className="info-text"><strong>Age:</strong> <span>18</span></div>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center info-item">
                  <FaEnvelope className="text-purple me-3 icon-normal" />
                  <div className="info-text"><strong>Email:</strong> <span>miantaha098@gmail.com</span></div>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center info-item">
                  <FaPhone className="text-purple me-3 icon-normal" />
                  <div className="info-text"><strong>Phone:</strong> <span>+92 301 9101380</span></div>
                </div>
              </Col>
              <Col md={6}>
                <div className="d-flex align-items-center info-item">
                  <FaMapMarkerAlt className="text-purple me-3 icon-normal" />
                  <div className="info-text"><strong>Place:</strong> <span>Gujranwala,Pakistan</span></div>
                </div>
              </Col>
            </Row>

            <div className="d-flex gap-3 mt-4 justify-content-start">
              <a href="/MianTaha-Resume.pdf" 
  download="MianTaha-Resume.pdf" className="btn btn-purple px-4 py-2 fw-bold">Download Resume</a>
              <a 
  href="#contact-section-bg" 
  className="btn btn-outline-purple px-4 py-2 fw-bold text-decoration-none"
>
  Hire Me
</a>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default About;