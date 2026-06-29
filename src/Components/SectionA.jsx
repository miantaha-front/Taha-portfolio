import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Typewriter from 'typewriter-effect';
import './SectionA.css';

const SectionA = () => {
  return (
    <div className="hero-wrapper" id='home'>
      {/* --- Advanced Floating Code/Tags Background Elements --- */}
      <div className="coding-bg-elements">
        <div className="floating-tag t1">&lt;div&gt;</div>
        <div className="floating-tag t2">&#123; code &#125;</div>
        <div className="floating-tag t3">Bootstrap</div>
        <div className="floating-tag t4">React.js</div>
        <div className="floating-tag t5">MYSQL</div>
        <div className="floating-tag t6">Jira[Project Management]</div>
        <div className="floating-tag t7">&lt;/&gt;</div>
        <div className="floating-tag t8">const [Huraira]</div>
        <div className="floating-tag t9">Java[Script]</div>
        <div className="floating-tag t10">import React</div>
        <div className="floating-tag t11">Java</div>
        <div className="floating-tag t12">&lt;section&gt;</div>
        <div className="floating-tag t13">🚀</div>
        <div className="floating-tag t14">C++</div>
        <div className="floating-tag t15">PHP</div>
        <div className="floating-tag t16">Front End[development]</div>
        <div className="floating-tag t17">wordpress</div>
      </div>

      <Container className="position-relative z-index-2">
        <Row className="align-items-center min-vh-100">
          
          {/* Left Side: Content */}
          <Col lg={7} md={12} className="text-start content-column">
            <span className="welcome-tag">Welcome to my Portfolio</span>
            <h5 className="hi-text">Hi, I'm</h5>
            <h1 className="name-text">Muhammad Abu Huraira<span className="dot">.</span></h1>
            
            <div className="typewriter-box d-flex align-items-center gap-2">
              <span>I'm a</span>
              <Typewriter
                options={{
                  strings: ["Software Engineer", "Web Developer", "Front-End Developer"],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </div>

            <div className="email-form-wrapper mt-5">
              <Form className="d-flex shadow-lg custom-input-group">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="email-field"
                />
                <Button className="contact-submit-btn">Contact Me</Button>
              </Form>
            </div>
          </Col>

          {/* Right Side: Image with Cyber Glow */}
          <Col lg={5} md={12} className="text-center position-relative">
            <div className="image-frame-container">
              <div className="glow-circle-bg"></div>
              <div className="image-frame">
                <img 
                  src={process.env.PUBLIC_URL + "/myimg1.jpeg"}
                  alt="Mian Taha" 
                  className="hero-main-img" 
                />
              </div>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  );
};

export default SectionA;