import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiSwift,
  DiMysql,
  DiDocker,
  DiJenkins,
  DiLinux,
} from "react-icons/di";
import { FaAws, FaGithub } from "react-icons/fa";
import { SiFirebase, SiNextdotjs } from "react-icons/si";

function Techstack() {
  return (
    <>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiReact />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiNextdotjs />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMysql />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <FaAws />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiDocker />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJenkins />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiGit />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <FaGithub />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiLinux />
        </Col>
      </Row>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons">
          <DiSwift />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiPython />
        </Col>
        <Col xs={4} md={2} className="tech-icons">
          <DiJava />
        </Col>
      </Row>

      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={4} md={2} className="tech-icons tech">
          System Design
        </Col>
        <Col xs={4} md={2} className="tech-icons tech">
          Kubernetes
        </Col>
        <Col xs={4} md={2} className="tech-icons tech">
          Kafka
        </Col>
        <Col xs={4} md={2} className="tech-icons tech">
          Terraform
        </Col>
        <Col xs={4} md={2} className="tech-icons tech">
          GraphQL
        </Col>
        <Col xs={4} md={2} className="tech-icons tech">
          Design Patterns
        </Col>
        <Col xs={4} md={2} className="tech-icons tech">
          Rest API
        </Col>
      </Row>
    </>
  );
}

export default Techstack;
