import "./Home.css";
import ProfilePic from "../../files/ProfilePic-small.png";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <h3>Hello, I'm</h3>
        <h1>Sasank Tadepalli</h1>
        <h2>Full Stack Web Developer.</h2>
        <h2>Programmer.</h2>
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
