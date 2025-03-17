import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Resume: React.FC = () => {
  return (
    <Container className="py-5">
      <Row className="mb-4">
        <Col md={8}>
          <h1>Resume</h1>
          <p className="lead">My professional journey and experience</p>
        </Col>
        <Col md={4} className="text-md-end">
          <Button variant="primary" href="/your-resume.pdf" target="_blank">
            <i className="bi bi-download me-2"></i>Download PDF
          </Button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Experience</h2>
          <hr />

          <div className="mb-4">
            <h4>Job Title</h4>
            <h5>Company Name</h5>
            <p className="text-muted">Jan 2020 - Present</p>
            <ul>
              <li>Key responsibility or achievement</li>
              <li>Another responsibility or project</li>
              <li>Technical skill or tool utilized</li>
            </ul>
          </div>

          <div className="mb-4">
            <h4>Previous Job Title</h4>
            <h5>Previous Company</h5>
            <p className="text-muted">Jun 2018 - Dec 2019</p>
            <ul>
              <li>Key responsibility or achievement</li>
              <li>Another responsibility or project</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Education</h2>
          <hr />

          <div className="mb-4">
            <h4>Degree Name</h4>
            <h5>University Name</h5>
            <p className="text-muted">2014 - 2018</p>
            <p>Brief description, relevant coursework, or achievements</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
