import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import './SectionA.css';

const SectionA = () => {
  return (
    <div className="hero-wrapper" id='home'>
      <Container>
        <Row className="align-items-center min-vh-100">
          
          {/* Left Side: Content */}
          <Col lg={7} md={12} className="text-start content-column">
            <span className="welcome-tag">Welcome to my Portfolio</span>
            <h5 className="hi-text">Hi, I'm</h5>
            <h1 className="name-text">Mian Taha<span className="dot">.</span></h1>
            
            <div className="typewriter-box d-flex align-items-center gap-2">
                <span>I'm a</span>
              <Typewriter
                options={{
                  strings: ["Software Engineer", "Web Developer"," Front-End Developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>

            <div className="email-form-wrapper mt-5">
              <Form className="d-flex shadow-sm custom-input-group">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="email-field"
                />
                <Button className="contact-submit-btn">Contact Me</Button>
              </Form>
            </div>
          </Col>

          {/* Right Side: Image */}
          <Col lg={5} md={12} className="text-center position-relative">
            <div className="image-frame">
               {/* Note: Apni image ko src/assets folder mein rakh kar import karein */}
              <img 
                src={process.env.PUBLIC_URL + "/OURIMG2.jpeg"}
                alt="Mian Taha" 
                className="hero-main-img" 
              />
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default SectionA;