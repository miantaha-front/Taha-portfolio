import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    /* full-width dark backdrop structure */
    <section className="education-modern-section w-100 py-5" id="education">
      {/* fluid container used to stretch background fully and kill white sidebars */}
      <Container fluid className="px-md-5 w-100">
        
        {/* --- Header Area --- */}
        <div className="text-center mb-5 position-relative section-header-fade">
          <div className="purple-bg-glow-top"></div>
          <div className="edu-icon-badge mx-auto mb-3">
            <FaGraduationCap size={28} />
          </div>
          <h2 className="fw-bold text-white section-main-title">Education</h2>
          <div className="title-accent-line mx-auto"></div>
        </div>

        {/* --- 3-Step Horizontal Timeline Row --- */}
        <div className="timeline-outer-container position-relative my-5">
          {/* Track line placed completely independent and above numbers */}
          <div className="horizontal-timeline-line d-none d-md-block"></div>

          <Row className="gy-5 justify-content-center position-relative z-index-cards">
            
            {/* Step 1: Matriculation */}
            <Col md={4} sm={6} className="position-relative card-animated-reveal">
              <div className="timeline-step-card p-4 h-100">
                <div className="step-number-node">1</div>
                <div className="d-flex align-items-center justify-content-between mb-3 mt-2">
                  <span className="badge-timeline-year">2021 - 2022</span>
                  <img src={process.env.PUBLIC_URL + "/scool.jpg"} alt="School" className="edu-card-logo" />
                </div>
                <h5 className="fw-bold text-white mb-2">Matriculation</h5>
                <p className="text-purple-accent small mb-0">The Gujranwala Public High School</p>
              </div>
            </Col>

            {/* Step 2: Intermediate */}
            <Col md={4} sm={6} className="position-relative card-animated-reveal dynamic-delay-1">
              <div className="timeline-step-card p-4 h-100">
                <div className="step-number-node">2</div>
                <div className="d-flex align-items-center justify-content-between mb-3 mt-2">
                  <span className="badge-timeline-year">2023 - 2024</span>
                  <img src={process.env.PUBLIC_URL + "/college.png"} alt="College" className="edu-card-logo" />
                </div>
                <h5 className="fw-bold text-white mb-2">Intermediate (ICS - Phys)</h5>
                <p className="text-purple-accent small mb-0">Govt Post Graduate College, Satellite Town</p>
              </div>
            </Col>

            {/* Step 3: BS Software Engineering */}
            <Col md={4} sm={6} className="position-relative card-animated-reveal dynamic-delay-2">
              <div className="timeline-step-card p-4 h-100 current-active-card">
                <div className="step-number-node pulse-node">3</div>
                <div className="d-flex align-items-center justify-content-between mb-3 mt-2">
                  <span className="badge-timeline-year active-year-badge">2024 - 2028 (Ongoing)</span>
                  <img src={process.env.PUBLIC_URL + "/uni.png"} alt="University" className="edu-card-logo" />
                </div>
                <h5 className="fw-bold text-transparent-gradient mb-2">BS Software Engineering</h5>
                <p className="text-white-50 small mb-0">University Of Gujrat, Main Campus</p>
              </div>
            </Col>

          </Row>
        </div>

        {/* --- Social Footer Panel --- */}
        <div className="social-footer-panel text-center p-4 mt-5">
          <p className="text-muted-silver small mb-3 text-uppercase tracking-wider">Let's Connect & Collaborate</p>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://www.instagram.com/wtf_mian_" target="_blank" rel="noreferrer" className="social-pill-item insta"><FaInstagram /></a>
            <a href="https://www.facebook.com/share/1DcGtgN73Z/" target="_blank" rel="noreferrer" className="social-pill-item fb"><FaFacebookF /></a>
            <a href="#" className="social-pill-item yt"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/muhammad-abu-huraira-927a65319/" target="_blank" rel="noreferrer" className="social-pill-item link"><FaLinkedinIn /></a>
            <a href="https://github.com/miantaha-front" target="_blank" rel="noreferrer" className="social-pill-item git"><FaGithub /></a>
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Education;