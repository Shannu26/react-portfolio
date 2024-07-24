import { ReactComponent as WorkIcon } from "../../Assets/work.svg";
import { ReactComponent as SchoolIcon } from "../../Assets/school.svg";
import { Container } from "react-bootstrap";
import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Experience() {
  let workIconStyles = { background: "#06D6A0" };
  let schoolIconStyles = { background: "#f9c74f" };

  return (
    <Container fluid className="project-section">
      <h1 className="project-heading">
        My <strong className="purple">Education</strong> &{" "}
        <strong className="purple">Experiences</strong>
      </h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3
                className="vertical-timeline-element-title"
                style={{ fontFamily: "Bebas Neue" }}
              >
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description" style={{ textAlign: "justify" }}>
                {element.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </Container>
  );
}

export default Experience;
