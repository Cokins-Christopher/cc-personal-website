import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

const Portfolio: React.FC = () => {
  // Sample project data - you would replace this with your actual projects
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "Brief description of this project and your role in it...",
      image: "/placeholder-project1.jpg",
      tags: ["React", "TypeScript", "Bootstrap"],
      link: "https://github.com/yourusername/project1",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Brief description of this project and your role in it...",
      image: "/placeholder-project2.jpg",
      tags: ["Node.js", "Express", "MongoDB"],
      link: "https://github.com/yourusername/project2",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Brief description of this project and your role in it...",
      image: "/placeholder-project3.jpg",
      tags: ["React Native", "Firebase"],
      link: "https://github.com/yourusername/project3",
    },
  ];

  return (
    <Container className="py-5">
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
