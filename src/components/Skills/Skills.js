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
    "Redux",
    "HTML",
    "CSS",
    "Swift",
    "ExpressJS",
    "REST API",
    "MVC",
    "Responsive Design",
  ];

  let skillsUI = skills.map((skill, i) => {
    return (
      <p className="skill" key={i}>
        {skill}
      </p>
    );
  });
  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills">{skillsUI}</div>
    </div>
  );
};

export default Skills;
