import "./Home.css";
import ProfilePic from "../../files/ProfilePic-small.png";

import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const clickHandler = (path) => {
    history.push(path);
  };
  return (
    <div className="home">
      <div className="left">
        <h3>Hello, I'm</h3>
        <h1>Sasank Tadepalli</h1>
        <h2>Full Stack Web Developer.</h2>
        <h2>Programmer.</h2>
        <div className="links">
          <button className="link" onClick={() => clickHandler("/about-me")}>
            More About Me
          </button>
          <button className="link" onClick={() => clickHandler("/my-projects")}>
            My Projects
          </button>
        </div>
      </div>
      <div className="right">
        <div className="img-container">
          <img src={ProfilePic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
