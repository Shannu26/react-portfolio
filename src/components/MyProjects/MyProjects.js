import "./MyProjects.css";

import Project from "./Project/Project";

import SortVisualizerImage from "../../files/sort-visualizer.png";
import WeatherAppImage from "../../files/weather-app.png";
import PortfolioImage from "../../files/portfolio.png";

const myProjects = [
  {
    title: "My Portfolio",
    description:
      "It is a website made to showcase my skills, my work and introduce myself to the possible recruiters and also to get connections to other developers across the world. It includes information about me, my skills and hobbies, and my notable projects.",
    technologies: [
      "ReactJS",
      "EmailJS",
      "Firebase Hosting",
      "CSS3",
      "React Router",
    ],
    image: PortfolioImage,
    liveURL: "/",
    githubLink: "https://github.com/Shannu26/react-portfolio",
    role: "Frontend",
  },
  {
    title: "Weather App",
    description:
      "It is a simple Weather app built using ReactJS and OpenWeatherMap API to get weather details of a particular city. The weather details include Current Temperature, wind speed, humidity %, pressure, sunrise and sunset time, and also weather forecast for next 48 hours.",
    technologies: [
      "ReactJS",
      "Netlify Hosting",
      "CSS3",
      "OpenWeatherMap API",
      "Axios",
    ],
    image: WeatherAppImage,
    liveURL: "https://distracted-goodall-270241.netlify.app/",
    githubLink: "https://github.com/Shannu26/react-weather-app",
    role: "Frontend",
  },
  {
    title: "Sort Visualizer",
    description:
      "It is a Web App built using ReactJS and ChartJS to visualise sorting algorithms. The algorithms I have implemented are Bubble Sort, Insertion Sort and Selection Sort. Each algorithm has some description about it and also it's space and time complexities.",
    technologies: ["ReactJS", "Netlify Hosting", "CSS3", "ChartJS"],
    image: SortVisualizerImage,
    liveURL: "https://jovial-joliot-49f56b.netlify.app/",
    githubLink: "https://github.com/Shannu26/react-sorting-visualizer",
    role: "Frontend",
  },
];

let projects = null;

projects = myProjects.map((project, i) => {
  return <Project {...project} key={i} />;
});

const MyProjects = () => {
  return (
    <div className="my-projects">
      <h1>My Projects</h1>
      <div className="projects">{projects}</div>
    </div>
  );
};

export default MyProjects;
