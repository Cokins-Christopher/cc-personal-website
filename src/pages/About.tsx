import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <Container className="py-5">
      <Row className="mb-5">
        <Col lg={6}>
          <h1 className="mb-4">About Me</h1>
          <p>
            Hello! I'm [Your Name], a passionate [Your Profession] based in
            [Your Location].
          </p>
          <p>
            Brief description of your background, education, and what drives you
            professionally...
          </p>
          <p>
            More about your journey, interests, and what makes you unique...
          </p>
        </Col>
        <Col lg={6} className="text-center">
          <Image
            src="/placeholder-profile.jpg"
            roundedCircle
            width={300}
            height={300}
            alt="Your Name"
            className="shadow"
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2 className="mb-4">My Skills</h2>
        </Col>
      </Row>

      <Row>
        <Col md={4} className="mb-4">
          <h4>Front-End Development</h4>
          <p>HTML, CSS, JavaScript, React, TypeScript, Bootstrap</p>
        </Col>
        <Col md={4} className="mb-4">
          <h4>Design</h4>
          <p>UI/UX, Figma, Adobe XD, Responsive Design</p>
        </Col>
        <Col md={4} className="mb-4">
          <h4>Other Skills</h4>
          <p>Git, Agile Development, Team Collaboration</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
