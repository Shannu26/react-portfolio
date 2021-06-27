import "./AboutMe.css";
import ProfilePic from "../../files/ProfilePic-large.png";
import Skills from "../Skills/Skills";
import ContactDetails from "../ContactDetails/ContactDetails";
import Resume from "../../files/SasankTadepalli-Resume.pdf";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="left">
        <img src={ProfilePic} alt="" />
        <ContactDetails />
      </div>
      <div className="right">
        <h1>About Me</h1>
        <p>
          Hi! I'm <span>Sasank Tadepalli</span>. I'm a Computer Science student
          at V R Siddhartha Engineering College.
        </p>
        <p>
          I'm a <span>Self-Taught</span> Full Stack Web Developer, iOS Developer
          and Programmer who gained experience by doing numerous projects and
          solving many problems that I've encountered during my learning
          journey. My Learning journey has been both fun and challenging.
        </p>
        <p>
          My notable experiences include <span>Leading</span> a team of 4 to
          develop an iOS Application that helps users to find and inform
          hospitals when there is an emergency. During last May, I worked as a{" "}
          <span>Freelance</span> to develop an iOS Application to store the book
          details present in prabhupada.io website.
        </p>
        <p>
          When I'm not coding, I spend my time <span>Playing Chess</span> and{" "}
          <span>Brain Games</span>,<span>Drawing</span> and{" "}
          <span>Reading Books</span>. I'm currently reading the{" "}
          <span>A Song of Ice and Fire</span> book series written by George R R
          Martin.
        </p>
        <Skills />
        <a
          href={Resume}
          download="SasankTadepalli-Resume.pdf"
          className="resume"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
