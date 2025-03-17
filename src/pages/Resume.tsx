// pages/Resume.tsx
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Resume: React.FC = () => {
  return (
    <Container fluid className="py-5 w-100">
      <Row className="mb-4">
        <Col md={8}>
          <h1>Resume</h1>
          <p className="lead">My professional journey and experience</p>
        </Col>
        <Col md={4} className="text-md-end">
          <Button variant="primary" href="/your-resume.pdf" target="_blank">
            Download PDF
          </Button>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <h2>Experience</h2>
          <hr />

          <div className="mb-4">
            <h4>Construction and Development Intern</h4>
            <h5>HPI Real Estate and Investments</h5>
            <p className="text-muted">June 2024 - August 2024</p>
            <ul>
              <li>
                Assisted in the planning and execution of construction and
                development projects
              </li>
              <li>
                Conducted in-depth research on upcoming projects, analyzing
                market conditions
              </li>
              <li>
                Engaged with suppliers, contractors, and customers to facilitate
                project coordination
              </li>
              <li>Evaluated bidding processes and contractor proposals</li>
              <li>
                Contributed to the development of a comprehensive project
                portfolio for a new development proposal
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <h4>Analyst Intern</h4>
            <h5>Trammell Crow Residential</h5>
            <p className="text-muted">March 2023 - May 2023</p>
            <ul>
              <li>
                Conducted comprehensive data analysis to support project
                development and investment decisions
              </li>
              <li>
                Compiled and presented detailed reports and presentations for
                strategic planning
              </li>
              <li>
                Assisted in the preparation and maintenance of financial models
                and forecasts
              </li>
              <li>
                Managed project documentation to ensure accurate record-keeping
              </li>
              <li>Played a key role in internal process optimization</li>
            </ul>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <h2>Education</h2>
          <hr />

          <div className="mb-4">
            <h4>Computer Science, Bachelor of Science</h4>
            <h5>Southern Methodist University, Lyle School of Engineering</h5>
            <p className="text-muted">August 2021 - May 2025</p>
            <p>
              Business Minor | Completed 72+ credit hours | Coursework includes
              Data Structures, Financial Accounting, C++, Calculus II, Discrete
              Computational Structures
            </p>
          </div>

          <h2 className="mt-5">Leadership</h2>
          <hr />

          <div className="mb-4">
            <h4>Co-Captain</h4>
            <h5>SMU Rugby Team</h5>
            <p className="text-muted">August 2021 - Present</p>
            <p>
              Led team development initiatives and managed mentorship program
              for new players
            </p>
          </div>

          <div className="mb-4">
            <h4>Member, IFC Representative</h4>
            <h5>Beta Theta Pi</h5>
            <p className="text-muted">January 2022 - Present</p>
            <p>
              Spearheaded leadership training program and led academic standards
              revision
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;
