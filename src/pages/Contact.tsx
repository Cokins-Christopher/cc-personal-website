// pages/Contact.tsx
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null as string | null },
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.status === 200) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: "Message sent successfully!" },
        });
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: {
            error: true,
            msg: data.error || "Something went wrong. Please try again later.",
          },
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "An error occurred. Please check your network connection.",
        },
      });
    }
  };

  return (
    <Container fluid className="py-5 w-100">
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
          {status.info.msg && (
            <Alert variant={status.info.error ? "danger" : "success"}>
              {status.info.msg}
            </Alert>
          )}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="What is this regarding?"
                value={formData.subject}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                rows={5}
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              disabled={status.submitting}
            >
              {status.submitting ? "Sending..." : "Send Message"}
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <h3>Contact Information</h3>
          <p>📍 Dallas, TX</p>
          <p>📧 Christopher.Cokins@gmail.com</p>
          <p>📱 512-649-6350</p>
          <h3 className="mt-4">Connect With Me</h3>
          <p>
            <a
              href="https://github.com/Cokins-Christopher"
              className="me-3"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/cole-cokins-5ba804230/"
              className="me-3"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </p>
          <h3 className="mt-4">Education</h3>
          <p>
            Southern Methodist University
            <br />
            Lyle School of Engineering
            <br />
            Computer Science, Bachelor of Science
            <br />
            Business Minor
            <br />
            August 2021 - May 2025
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
