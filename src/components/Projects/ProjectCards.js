import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {/* <Card.Img variant="top" src={props.imgPath} alt="card-img" /> */}
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{props.title}</Card.Title>
        <br />
        <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
          {props.line1}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
          {props.line2}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify", whiteSpace: "pre-line" }}>
          {props.line3}
        </Card.Text>

        {props.ghLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; GitHub
          </Button>
        )}

        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
