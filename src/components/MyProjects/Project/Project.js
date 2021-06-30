import "./Project.css";

const Project = (props) => {
  return (
    <div className="project">
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h4>
        Role : <span>{props.role}</span>
      </h4>
      <h5>Technologies Used : </h5>
      <ul>
        {props.technologies.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <a href={props.liveURL} target="_window">
        View Live
      </a>
      <a href={props.githubLink} target="_window">
        View Code
      </a>
    </div>
  );
};

export default Project;
