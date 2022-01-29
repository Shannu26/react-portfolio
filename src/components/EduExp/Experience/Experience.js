import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <div className="experience">
        <p id="p">08/2021 - Present</p>
        <h1 id="h1">Systems Engineer</h1>
        <h2 id="h2">Infosys</h2>
        <h5 id="h5">Achievements / Tasks :</h5>
        <ul>
          <li>
            Learning topics such as Python, Data Visualisation, Exploratory Data
            Analysis, Probability and Statistics.
          </li>
        </ul>
      </div>
      <div className="experience">
        <p id="p">05/2020 - 09/2020</p>
        <h1 id="h1">iOS Developer</h1>
        <h2 id="h2">Freelance</h2>
        <h5 id="h5">Achievements / Tasks :</h5>
        <ul>
          <li>
            Developed an iOS App to store books present in prabhupada.io
            website.
          </li>
          <li>
            Communicated and negotiated with client to complete the project
            successfully.
          </li>
          <li>Worked with technologies such as Swift, Xcode.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
