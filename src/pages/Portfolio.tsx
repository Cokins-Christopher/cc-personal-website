// pages/Portfolio.tsx
import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const Portfolio: React.FC = () => {
  // Projects based on your skills and experience
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description:
        "This responsive personal website built with React, TypeScript, and Bootstrap to showcase my skills and experience.",
      image: "/placeholder-project1.jpg",
      tags: ["React", "TypeScript", "Bootstrap"],
      link: "https://github.com/colecokins/personal-website",
    },
    {
      id: 2,
      title: "Data Analysis Dashboard",
      description:
        "Financial analysis dashboard created during my internship at Trammell Crow Residential to visualize investment opportunities.",
      image: "/placeholder-project2.jpg",
      tags: ["Python", "JavaScript", "Data Analysis"],
      link: "#",
    },
    {
      id: 3,
      title: "Project Management Tool",
      description:
        "Web application to manage construction projects, developed during my internship at HPI Real Estate and Investments.",
      image: "/placeholder-project3.jpg",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#",
    },
    {
      id: 4,
      title: "SMU Rugby Team Website",
      description:
        "Website for the SMU Rugby team to increase visibility and manage team operations.",
      image: "/placeholder-project4.jpg",
      tags: ["HTML/CSS", "JavaScript", "Bootstrap"],
      link: "#",
    },
  ];

  return (
    <Container fluid className="py-5 w-100">
      <Row className="mb-4">
        <Col>
          <h1>My Portfolio</h1>
          <p className="lead">A showcase of my projects and work</p>
        </Col>
      </Row>

      <Row>
        {projects.map((project) => (
          <Col md={4} key={project.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={project.image} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <div className="mb-3">
                  {project.tags.map((tag, index) => (
                    <Badge bg="secondary" className="me-1" key={index}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Card.Link href={project.link} target="_blank">
                  View Project
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Portfolio;
