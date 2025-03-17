// components/Footer.tsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5 w-100">
      <Container fluid>
        <Row>
          <Col md={6}>
            <p>
              © {new Date().getFullYear()} Cole Cokins. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <a
              href="https://github.com/Cokins-Christopher"
              className="text-white me-3"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/cole-cokins-5ba804230/"
              className="text-white me-3"
            >
              LinkedIn
            </a>
            <a
              href="mailto:Christopher.Cokins@gmail.com"
              className="text-white"
            >
              Email
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
