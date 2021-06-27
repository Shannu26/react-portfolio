import "./EduExp.css";

import { useState } from "react";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";

const EduExp = () => {
  const [content, setContent] = useState(0);

  const clickHandler = (content) => {
    setContent(content);
  };

  return (
    <div className="edu-exp">
      <div className="tabs">
        <button
          onClick={() => clickHandler(0)}
          className={content === 0 ? "active" : ""}
        >
          Education
        </button>
        <button
          onClick={() => clickHandler(1)}
          className={content === 1 ? "active" : ""}
        >
          Experience
        </button>
      </div>
      {content === 0 ? <Education /> : <Experience />}
    </div>
  );
};

export default EduExp;
