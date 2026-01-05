import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone,FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaMapMarkerAlt, FaCode, FaCheckCircle } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-professional-v2">
      <Container>
        <Row className="gy-5">
          
          {/* Column 1: Intro */}
          <Col lg={3} md={6} className="f-col">
            <h3 className="f-logo">Mian<span className="purple-txt">Taha.</span></h3>
            <p className="f-desc">
              Building robust and scalable web solutions. Specialized in MERN Stack and UI/UX Design.
            </p>
            <div className="f-socials-row">
              <a href="#" className="s-icon-link"><FaGithub /></a>
              <a href="#" className="s-icon-link"><FaLinkedin /></a>
              <a href="#" className="s-icon-link"><FaInstagram /></a>
            </div>
          </Col>

          {/* Column 2: Services - Fixed Alignment */}
          <Col lg={3} md={6} className="f-col">
            <h5 className="f-heading">Services</h5>
            <ul className="f-list-items">
              <li><FaCode className="li-icon" /> <span>Web Development</span></li>
              <li><FaCode className="li-icon" /> <span>WordPress</span></li>
              <li><FaCode className="li-icon" /> <span>Customize Code Base</span></li>
              <li><FaCode className="li-icon" /> <span>Responsive Website</span></li>
              <li><FaCode className="li-icon" /> <span>UI/UX Optimization</span></li>

            </ul>
          </Col>

          {/* Column 3: Quick Links - Fixed Alignment */}
          <Col lg={3} md={6} className="f-col">
            <h5 className="f-heading">Quick Links</h5>
            <ul className="f-list-items">
              <li><a href="#home"><FaCheckCircle className="li-icon" /> Home</a></li>
              <li><a href="#about"><FaCheckCircle className="li-icon" /> About Me</a></li>
              <li><a href="#skills"><FaCheckCircle className="li-icon" /> My Skills</a></li>
              <li><a href="#education"><FaCheckCircle className="li-icon" />My Education</a></li>
              <li><a href="#projects"><FaCheckCircle className="li-icon" />Projects</a></li>
              <li><a href="#contacts"><FaCheckCircle className="li-icon" />Contact Us</a></li>
            </ul>
          </Col>

          {/* Column 4: Contact */}
          <Col lg={3} md={6} className="f-col">
            <h5 className="f-heading">Contact Details</h5>
            <div className="f-contact-box">
              <div className="c-info"><FaEnvelope className="c-icon" /> <span>miantaha@example.com</span></div>
              <div className="c-info mt-3"><FaMapMarkerAlt className="c-icon" /> <span>Gujranwala, Pakistan</span></div>
             <div className="c-info mt-3"><FaPhone className="c-icon" /> <span>+92 301 9101380</span></div>
            </div>
          </Col>

        </Row>

        <div className="f-copyright-strip">
          <p>© 2026 Mian Taha. Proudly Designed in Gujranwala.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;