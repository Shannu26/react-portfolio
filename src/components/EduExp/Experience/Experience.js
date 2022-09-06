import "./Experience.css";

const Experience = () => {
  return (
    <div>
      <div className="experience">
        <p id="p">08/2021 - 08/2022</p>
        <h1 id="h1">Systems Engineer</h1>
        <h2 id="h2">Infosys</h2>
        <h5 id="h5">Achievements / Tasks :</h5>
        <ul>
          <li>Worked as a Data Analyst in the AINADEL Department.</li>
          <li>
            Leveraged knowledge in Blue Prism RPA tool to automate data
            collection phase of Data Science Life Cycle.
          </li>
          <li>
            Leveraged knowledge in Exploratory Data Analysis, Feature
            Engineering and Machine Learning to build predictive models from the
            data collected.
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
