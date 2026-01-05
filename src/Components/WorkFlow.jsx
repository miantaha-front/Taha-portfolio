import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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
    <section className="workflow-section py-5" id="experience">
      <Container>
        <div className="text-center mb-5">
          <h2 className="fw-bold display-6"><span className="text-purple">Work Time Line</span></h2>
          <div className="heading-underline mx-auto"></div>
          <p className="text-muted mt-3">My step-by-step process to build your dream frontend.</p>
        </div>

        <div className="main-timeline">
          {steps.map((step, index) => (
            <div key={step.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content shadow-sm p-4">
                <div className="icon-box mb-3">{step.icon}</div>
                <h4 className="fw-bold">{step.title}</h4>
                <p className="text-muted mb-0">{step.desc}</p>
                <span className="step-number">{step.id}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Workflow;