import "./Skills.css";

const Skills = () => {
  const skills = [
    "ReactJS",
    "NodeJS",
    "Python",
    "Java",
    "JavaScript",
    "Git",
    "MongoDB",
    "HTML",
    "CSS",
    "Swift",
    "ExpressJS",
    "REST API",
  ];

  let skillsUI = skills.map((skill) => {
    return <p className="skill">{skill}</p>;
  });
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills">{skillsUI}</div>
    </div>
  );
};

export default Skills;
