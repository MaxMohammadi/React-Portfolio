import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ReactPortfolio from "./../../Assets/ReactPortfolio.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ReactPortfolio}
              isBlog={false}
              title="React Portfolio"
              description="Personal portfolio website to showcase what I learned about my skills. Some technologies I used to make this web app: ReactJS, NodeJS, CSS, Vercel"
              link="https://github.com/MaxMohammadi/React-Portfolio"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
