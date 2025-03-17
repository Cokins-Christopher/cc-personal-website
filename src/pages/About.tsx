// pages/About.tsx
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const About: React.FC = () => {
  return (
    <Container fluid className="py-5 w-100">
      <Row className="mb-5">
        <Col lg={6}>
          <h1 className="mb-4">About Me</h1>
          <p>
            Hello! I'm Cole Cokins, a Computer Science student at Southern
            Methodist University in Dallas, TX.
          </p>
          <p>
            I'm currently pursuing a Bachelor of Science in Computer Science
            with a minor in Business at SMU's Lyle School of Engineering. I'm
            set to graduate in May 2025, and I've completed the maximum number
            of credit hours each semester, totaling 72+ hours.
          </p>
          <p>
            My coursework includes Data Structures, Financial Accounting, C++,
            Calculus II, and Discrete Computational Structures. I balance my
            technical studies with practical business knowledge, allowing me to
            approach problems from multiple perspectives.
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
          <h4>Technical Skills</h4>
          <p>
            C++, Java, JavaScript, HTML/CSS, React, Git/GitHub, Python, MySQL,
            NoSQL, Bootstrap
          </p>
        </Col>
        <Col md={4} className="mb-4">
          <h4>Business & Analysis</h4>
          <p>
            Financial Modeling, Data Analysis, Project Management, Strategic
            Planning
          </p>
        </Col>
        <Col md={4} className="mb-4">
          <h4>Leadership & Languages</h4>
          <p>Team Leadership, Mentoring, Spanish (Conversational)</p>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
