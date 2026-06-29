import React from 'react';
import { Container, Badge } from 'react-bootstrap';
import { FaCheckCircle, FaRocket } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience-fluid-section w-100 py-5" id="experience">
      <Container fluid className="px-md-5 w-100 position-relative z-index-top">
        
        {/* Section Header */}
        <div className="text-center mb-5 element-fade-in-up">
          <h2 className="fw-bold display-5 mb-2"> 
            <span className="text-purple-neon-gradient">My Experience</span>
          </h2>
          <div className="heading-glow-bar mx-auto"></div>
          <p className="text-muted mt-3 modern-italic-sub">The only source of knowledge is experience.</p>
        </div>

        {/* 👑 Direct Full Width Container matching exact Nav Bar scale */}
        <div className="experience-navbar-aligned-container mx-auto">
          
          <div className="premium-border-glow-wrapper w-100">
            {/* Spinning Light Engine */}
            <div className="neon-revolving-glow"></div>
            
            {/* Inner Glass Card */}
            <div className="experience-glass-wide-card p-4 p-md-5 w-100">
              <div className="experience-split-layout">
                
                {/* Left Side: Company Branding */}
                <div className="branding-divider-column text-center px-3">
                  <div className="brand-glowing-sphere mx-auto mb-4">
                    <img src={process.env.PUBLIC_URL + "/tenzsofft.png"} alt="TenzSoft" className="brand-fluid-img" />
                  </div>
                  <h3 className="fw-black company-premium-title mb-1">
                    <a href="https://tenzsoft.com" target="_blank" rel="noreferrer" className="company-link-interaction">TenzSoft</a>
                  </h3>
                  <p className="text-muted small geo-tracking-text mb-3">Gujranwala, Pakistan</p>
                  <Badge className="badge-neon-purple-timeline py-2 px-4 rounded-pill">
                    2025 - Present
                  </Badge>
                </div>

                {/* Right Side: Detailed Tech Descriptions */}
                <div className="experience-details-content-column">
                  <div className="d-flex align-items-center mb-3 main-role-header">
                    <FaRocket className="rocket-propulsion-icon me-2" />
                    <h2 className="fw-bold text-dark-slate-title mb-0">Front End Developer</h2>
                  </div>
                  
                  <p className="lead-experience-summary text-muted mb-4">
                    Contributing as a Core Developer, focusing on building high-performance, beautiful, 
                    and interactive interface ecosystems while structuring robust tech-stacks.
                  </p>

                  {/* Responsibilities */}
                  <ul className="list-unstyled high-tech-task-list mb-4">
                    <li className="mb-3 d-flex align-items-start step-task-item">
                      <FaCheckCircle className="check-bullet-purple mt-1 me-2 flex-shrink-0" /> 
                      <span>Developing highly responsive UI systems using <b>React.js & Bootstrap</b>.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start step-task-item">
                      <FaCheckCircle className="check-bullet-purple mt-1 me-2 flex-shrink-0" /> 
                      <span>Structuring efficient relational tables and optimized indexing via <b>MySQL</b>.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start step-task-item">
                      <FaCheckCircle className="check-bullet-purple mt-1 me-2 flex-shrink-0" /> 
                      <span>Writing custom core systems, desktop tools, and procedural backend algorithms in <b>C++ & Java</b>.</span>
                    </li>
                    <li className="mb-3 d-flex align-items-start step-task-item">
                      <FaCheckCircle className="check-bullet-purple mt-1 me-2 flex-shrink-0" /> 
                      <span>Tracking sprints, tasks, deployment roadmaps, and workflows using <b>Jira Project Management</b>.</span>
                    </li>
                  </ul>

                  {/* 📊 Beautiful Distributed Skills Layout Grid */}
                  <div className="tech-stack-organized-deck pt-3">
                    <h6 className="small text-uppercase fw-bold text-indigo-muted tracking-widest mb-3">Core Technical Infrastructure</h6>
                    <div className="language-deck-grid">
                      <div className="premium-tech-pill tech-react">React.js</div>
                      <div className="premium-tech-pill tech-bootstrap">Bootstrap</div>
                      <div className="premium-tech-pill tech-mysql">MySQL</div>
                      <div className="premium-tech-pill tech-cpp">C++</div>
                      <div className="premium-tech-pill tech-java">Java</div>
                      <div className="premium-tech-pill tech-jira">Jira</div>
                      <div className="premium-tech-pill tech-pm">Project Management</div>
                      <div className="premium-tech-pill tech-php">PHP</div>
                      <div className="premium-tech-pill tech-wp">WordPress</div>
                      <div className="premium-tech-pill tech-js">JavaScript ES6</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Experience;