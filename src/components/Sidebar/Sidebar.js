import "./Sidebar.css";

import { NavLink } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <NavLink
        to="/about-me"
        className="nav-link"
        onClick={props.closeSideNavHandler}
      >
        About Me
      </NavLink>
      <NavLink
        to="/my-projects"
        className="nav-link"
        onClick={props.closeSideNavHandler}
      >
        My Projects
      </NavLink>
      <NavLink
        to="/contact-me"
        className="nav-link"
        onClick={props.closeSideNavHandler}
      >
        Contact Me
      </NavLink>
    </div>
  );
};

export default Sidebar;
