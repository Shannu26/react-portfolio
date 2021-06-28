import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <NavLink to="/home" className="nav-link">
          Sasank Tadepalli
        </NavLink>
      </div>
      <div className="right">
        <NavLink to="/about-me" className="nav-link">
          About Me
        </NavLink>
        <NavLink to="/my-projects" className="nav-link">
          My Projects
        </NavLink>
        <NavLink to="/contact-me" className="nav-link">
          Contact Me
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
