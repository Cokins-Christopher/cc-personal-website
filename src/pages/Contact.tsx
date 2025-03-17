import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact: React.FC = () => {
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col>
          <h1>Contact Me</h1>
          <p className="lead">
            Get in touch for opportunities or collaborations
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={6} className="mb-4">
          <h3>Send Me a Message</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Your name" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="your.email@example.com" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="What is this regarding?" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Your message..."
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>

        <Col md={6}>
          <h3>Contact Information</h3>
          <p>
            <i className="bi bi-geo-alt me-2"></i>Your Location, City, Country
          </p>
          <p>
            <i className="bi bi-envelope me-2"></i>your.email@example.com
          </p>
          <p>
            <i className="bi bi-phone me-2"></i>+1 (123) 456-7890
          </p>

          <h3 className="mt-4">Connect With Me</h3>
          <p>
            <a
              href="https://github.com/yourusername"
              className="me-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i> GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              className="me-3"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-twitter"></i> Twitter
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
