import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FaPaperPlane } from 'react-icons/fa';
import './ContactForm.css';

const Contact = () => {
  return (
    <section className="contact-section-bg py-5" id="contacts">
      <Container className="d-flex justify-content-center align-items-center min-vh-100">
        
        {/* Main Floating Card */}
        <div className="contact-main-wrapper shadow-lg d-flex flex-column flex-md-row">
          
          {/* Left Side: Image & Text */}
          <div className="contact-left-visual d-flex flex-column justify-content-end p-4">
            <div className="overlay-gradient"></div>
            <div className="content-on-top text-white">
              <h2 className="fw-bold mb-0">Let's <br /> Connect</h2>
              <p className="small opacity-75 mt-2">I am available for new projects.</p>
            </div>
            {/* Apni Image ka path yahan dein */}
            <img src="\OURIMG3.jpeg" alt="Profile" className="side-bg-img" />
          </div>

          {/* Right Side: Clean Form */}
          <div className="contact-right-box p-4 p-md-5 flex-grow-1 bg-white">
            <h5 className="text-center fw-bold mb-4 text-secondary">Contact Us</h5>
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Your Name" className="minimal-input" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Your Email" className="minimal-input" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control as="textarea" rows={3} placeholder="Your Message" className="minimal-input" />
              </Form.Group>

              <div className="text-center">
                <Button className="btn-modern-purple px-5 py-2">
                  Send Message <FaPaperPlane className="ms-2" />
                </Button>
              </div>
            </Form>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;