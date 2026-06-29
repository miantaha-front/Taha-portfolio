import React from 'react';
import { Container } from 'react-bootstrap';
import { FaEdit, FaLayerGroup, FaCode, FaCheckDouble } from 'react-icons/fa';
import './WorkFlow.css';

const Workflow = () => {
  const steps = [
    {
      id: 1,
      title: "UI/UX Planning",
      desc: "Analyzing requirements and creating a visual structure for a user-friendly experience.",
      icon: <FaEdit />,
    },
    {
      id: 2,
      title: "Pixel Perfect Design",
      desc: "Turning creative ideas into high-quality layouts using modern design principles.",
      icon: <FaLayerGroup />,
    },
    {
      id: 3,
      title: "Frontend Coding",
      desc: "Bringing designs to life with clean, efficient React and Bootstrap code.",
      icon: <FaCode />,
    },
    {
      id: 4,
      title: "Responsive Testing",
      desc: "Ensuring the website looks flawless on mobile, tablet, and desktop screens.",
      icon: <FaCheckDouble />,
    },
  ];

  return (
    <section className="workflow-dark-section py-5 w-100" id="workflow">
      <Container fluid className="px-md-5 position-relative z-index-top">
        
        {/* Section Header */}
        <div className="text-center mb-5 element-fade-in-up">
          <h2 className="fw-bold display-5 mb-2"> 
            <span className="text-neon-cyan-gradient">Development Workflow</span>
          </h2>
          <div className="workflow-glow-bar mx-auto"></div>
          <p className="workflow-sub-title text-muted mt-3">My step-by-step process to build your dream frontend.</p>
        </div>

        {/* 👑 Main Horizontal Timeline Wrapper aligned to Navbar */}
        <div className="horizontal-timeline-container mx-auto">
          
          {/* Central Horizontal Axis Line */}
          <div className="timeline-axis-line"></div>
          
          <div className="timeline-steps-flex-grid">
            {steps.map((step, index) => {
              // Alternating logic: Even indexes (0, 2 -> Step 1, 3) sit below line. Odd indexes (1, 3 -> Step 2, 4) sit above line.
              const isEven = index % 2 === 0;
              const positionClass = isEven ? "box-below-axis" : "box-above-axis";

              return (
                <div key={step.id} className={`horizontal-timeline-item ${positionClass}`}>
                  
                  {/* The Vector Node Dot on the main line */}
                  <div className="axis-node-indicator">
                    <span className="node-number-badge">{step.id}</span>
                  </div>

                  {/* Cyber Floating Content Box */}
                  <div className="cyber-workflow-card p-4">
                    <div className="card-pulse-glowing-neon"></div>
                    <div className="workflow-card-inner-content position-relative">
                      <div className="workflow-icon-sphere mb-3">
                        {step.icon}
                      </div>
                      <h4 className="fw-bold workflow-title mb-2">{step.title}</h4>
                      <p className="workflow-desc mb-0">{step.desc}</p>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </Container>
    </section>
  );
};

export default Workflow;