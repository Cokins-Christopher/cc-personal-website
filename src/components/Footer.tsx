// components/Footer.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a
              href="https://github.com/yourusername"
              className="text-white me-3"
            >
              <i className="bi bi-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="text-white me-3"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a href="mailto:your.email@example.com" className="text-white">
              <i className="bi bi-envelope"></i> Email
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
