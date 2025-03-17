// pages/Home.tsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <main className="w-100">
      <section className="bg-dark text-white py-5 text-center w-100">
        <Container fluid>
          <Row className="py-5">
            <Col md={8} className="mx-auto">
              <h1 className="display-4 fw-bold">Cole Cokins</h1>
              <p className="lead mb-4">
                Computer Science Student | SMU | Full-Stack Developer
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Button variant="primary" size="lg" href="/portfolio">
                  See My Work
                </Button>
                <Button variant="outline-light" size="lg" href="/contact">
                  Contact Me
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-5 w-100">
        <Container fluid>
          <Row>
            <Col md={4} className="mb-4">
              <h3>What I Do</h3>
              <p>
                Computer Science student with experience in full-stack
                development, data analysis, and project management. I combine
                technical skills with business knowledge to create practical
                solutions.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h3>Experience</h3>
              <p>
                Analyst Intern at Trammell Crow Residential and Construction &
                Development Intern at HPI Real Estate and Investments, focusing
                on data analysis and project coordination.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h3>Technical Skills</h3>
              <p>
                C++, Java, JavaScript, HTML/CSS, React, Git/GitHub, Python,
                MySQL, NoSQL, Bootstrap, Postman, MS Office
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;
