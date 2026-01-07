import React from 'react';
import { Phone } from 'lucide-react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import './navbar.css'; // Custom styles ke liye

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light" fixed="top" className="shadow-sm py-3">
      <Container>
        {/* Logo Section */}
        <Navbar.Brand href="#home" className="fw-bold fs-3 text-purple" style={{ color: '#6f42c1 !important' }}>
         MianTaha<span className="text-dark"></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="my-nav-links">
            <Nav.Link href="#home" className="nav-item-custom mx-1">Home</Nav.Link>
            <Nav.Link href="#About" className="nav-item-custom mx-1">About</Nav.Link>
            <Nav.Link href="#skills" className="nav-item-custom mx-1">Skills</Nav.Link>
            <Nav.Link href="#education" className="nav-item-custom mx-1">Education</Nav.Link>
            <Nav.Link href="#experience" className="nav-item-custom mx-1">Work Experience</Nav.Link>
          </Nav>

          {/* Phone Button */}
          <Nav>
            <Button 
              variant="primary" 
              className="d-flex align-items-center gap-2 rounded-pill px-4 shadow-sm"
              style={{ backgroundColor: '#6f42c1', border: 'none' }}
            >
              <Phone size={18} />
              <span>+92 301 9101380</span>
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;