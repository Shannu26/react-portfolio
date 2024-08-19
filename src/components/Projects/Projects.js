import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
// import leaf from "../../Assets/Projects/leaf.png";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              // imgPath={chatify}
              title="Video Conferencing Application"
              line1="• Built a MERN Stack Video Conferencing app with features such as peer-to-peer video streaming, real-time messaging, screen sharing, and user authentication via JWT."
              line2="• Integrated WebRTC and SimplePeer for Peer-to-Peer Communication to enable seamless, low-latency video and audio communication between users."
              line3=""
              ghLink="https://github.com/Shannu26/mern-video-chat-app"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={chatify}
              title="Hospital Finder"
              line1="• Led a team of 4 to develop an iOS Application to find the nearest hospital during emergencies."
              line2="• Coordinated and administered project tasks, ensuring a 95% compliance with the project schedule."
              line3="• Leveraged technologies such as Swift, Xcode, Firebase, and Apple MapKit, resulting in a 40% reduction in app response time and a seamless user experience."
              ghLink="https://github.com/Shannu26/Hospital-Finder-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Chat App"
              line1="• Developed a MERN Stack Chat Application enabling real-time data transfer between users by establishing 2-way communication between the client and server using web sockets."
              line2="• Employed technologies including ReactJS, NodeJS, Socket.io, Styled Components, ExpressJS, React Router, and MongoDB."
              ghLink="https://github.com/Shannu26/chat-app-frontend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="E-Commerce Website"
              line1="• Built a PERN Stack E-Commerce app for a seamless and secure online shopping experience."
              line2="• Integrated CRUD functionality using PostgresSQL, reducing data retrieval time by 60%, and implemented secure user authentication with PassportJS."
              line3="• Designed an order management system to track and process customer orders and an admin dashboard for product management, order processing, and user management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Notes App"
              line1="• Developed a full stack application to store and track notes based on categories using NodeJS backend and EJS frontend. "
              line2="• Integrated CRUD functionality using MongoDB and MongooseJS, reducing data retrieval time by 60%, and implemented secure user authentication with PassportJS. "
              line3="• Made use of HTML, CSS, JavaScript, EJS, NodeJS, ExpressJS, PassportJS, and MongoDB, resulting in a 30% reduction in page load times."
              ghLink="https://github.com/Shannu26/full-stack-notes-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Weather App"
              line1="• Developed a Simple Weather application using ReactJS and OpenWeatherMap API to get weather details of a particular city."
              line2="• The weather details include Current Temperature, wind speed, humidity %, pressure, sunrise and sunset time, and also weather forecast for next 48 hours."
              ghLink="https://github.com/Shannu26/react-weather-app"
              demoLink="https://distracted-goodall-270241.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Sort Visualizer"
              line1="• Developed a Web App using ReactJS and ChartJS to visualise sorting algorithms."
              line2="• Implemented Bubble Sort, Insertion Sort and Selection Sort Algorithms. "
              line3="• Each algorithm has some description about it and also it's space and time complexities."
              ghLink="https://github.com/Shannu26/react-sorting-visualizer"
              demoLink="https://jovial-joliot-49f56b.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
