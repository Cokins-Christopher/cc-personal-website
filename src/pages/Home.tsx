import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <main>
      <section className="bg-dark text-white py-5 text-center">
        <Container>
          <Row className="py-5">
            <Col md={8} className="mx-auto">
              <h1 className="display-4 fw-bold">Your Name</h1>
              <p className="lead mb-4">
                Front-end Developer | UI/UX Designer | Problem Solver
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

      <section className="py-5">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <h3>What I Do</h3>
              <p>Brief description of your key skills and services...</p>
            </Col>
            <Col md={4} className="mb-4">
              <h3>Featured Projects</h3>
              <p>Highlight of your best or most recent projects...</p>
            </Col>
            <Col md={4} className="mb-4">
              <h3>Latest Updates</h3>
              <p>Recent achievements or blog posts...</p>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default Home;
