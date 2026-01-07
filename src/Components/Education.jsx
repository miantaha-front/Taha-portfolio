import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGraduationCap, FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Education.css';

const Education = () => {
  return (
    <section className="education-section py-5" id="education">
      <Container className="edu-main-container shadow-sm p-0 overflow-hidden">
        <Row className="g-0">
          
          {/* LEFT SIDE: The Big Purple Box */}
          <Col md={4} className="bg-purple-main d-flex flex-column align-items-center justify-content-center text-white py-5">
            <div className="icon-circle-bg mb-3">
               <FaGraduationCap size={40} />
            </div>
            <h2 className="fw-bold">Education</h2>
          </Col>

          {/* RIGHT SIDE: Content Area */}
          <Col md={8} className="bg-light-gray p-4 p-lg-5">
           <h5 className="fw-bold mb-2 d-flex align-items-center text-dark">
                  {/* Icon ka color default rahega */}
         <FaGraduationCap className="me-2 text-purple" /> 
   
                {/* Sirf text ka color light purple hoga */}
            <span className="text-light-purple">My Education</span>
            </h5>
           <p className="text-dark education-desc-small mb-4">
              Education is not just about learning facts, but the training of the mind to think creatively and solve real-world problems.
            </p>
            
            <Row className="gy-4">
              {/* Card 1: BS Software Engineering */}
              <Col sm={6}>
                <div className="mini-edu-card p-3 shadow-sm bg-white d-flex align-items-start gap-3">
                  <img src={process.env.PUBLIC_URL + "/scool.jpg"} alt="Uni" className="mini-logo" />
                  <div>
                    <h6 className="fw-bold text-black mb-1">Matriculation</h6>
                    <p className="small text-muted mb-1">The Gujranwala Public High School</p>
                    <span className="badge bg-purple-light text-purple">2021-2022</span>
                  </div>
                </div>
              </Col>

              {/* Card 2: Intermediate */}
              <Col sm={6}>
                <div className="mini-edu-card p-3 shadow-sm bg-white d-flex align-items-start gap-3">
                  <img src={process.env.PUBLIC_URL + "/college.png"} alt="PGC" className="mini-logo" />
                  <div>
                    <h6 className="fw-bold mb-1 text-black">Intermediate - ICS-PHY</h6>
                    <p className="small text-muted mb-1">Goverment Post Graduate College , SatelliteTown</p>
                    <span className="badge bg-purple-light text-purple">2023-2024</span>
                  </div>
                </div>
              </Col>

              {/* Card 3: Matriculation (As per 3 blocks requirement) */}
              <Col sm={6}>
                <div className="mini-edu-card p-3 shadow-sm bg-white d-flex align-items-start gap-3">
                  <img src={process.env.PUBLIC_URL + "/uni.png"} alt="School" className="mini-logo" />
                  <div>
                    <h6 className="fw-bold mb-1 text-black">BS-SoftwareEngineering</h6>
                    <p className="small text-muted mb-1">University Of Gujart , Main Campus</p>
                    <span className="badge bg-purple-light text-purple">2024-2028 : Till continue</span>
                  </div>
                </div>
              </Col>

              {/* SOCIAL ICONS BLOCK (4th Block logic) */}
              <Col sm={6}>
                <div className="mini-edu-card p-3 shadow-sm bg-white text-center d-flex flex-column justify-content-center">
                  <div className="d-flex justify-content-center gap-3">
                    <a href="https://www.instagram.com/wtf_mian_" className="social-icon insta"><FaInstagram /></a>
                    <a href="https://www.facebook.com/share/1DcGtgN73Z/" className="social-icon fb"><FaFacebookF /></a>
                    <a href="#" className="social-icon yt"><FaYoutube /></a>
                    <a href="https://www.linkedin.com/in/muhammad-abu-huraira-927a65319/" className="social-icon link"><FaLinkedinIn /></a>
                    <a href="https://github.com/miantaha-front" className="social-icon git"><FaGithub /></a>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          
        </Row>
      </Container>
    </section>
  );
};

export default Education;