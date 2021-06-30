import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useState, useLayoutEffect } from "react";

import Sidebar from "../Sidebar/Sidebar";

const Navbar = (props) => {
  const [showNav, setShowNav] = useState(window.innerWidth >= 800);

  useLayoutEffect(() => {
    const sizeChangeHandler = () => {
      setShowNav(window.innerWidth >= 800);
    };
    window.addEventListener("resize", sizeChangeHandler);

    return () => {
      window.removeEventListener("resize", sizeChangeHandler);
    };
  });
  return (
    <div className="navbar" id={`${props.showSideNav ? "nav-show" : ""}`}>
      <div className="left">
        <NavLink
          to="/home"
          className="nav-link"
          onClick={props.closeSideNavHandler}
        >
          Sasank Tadepalli
        </NavLink>
      </div>
      {!showNav && (
        <div className="right">
          <i
            className={`fa fa-${props.showSideNav ? "times" : "bars"}`}
            onClick={props.toggleSideNavHandler}
          ></i>
        </div>
      )}

      {!showNav && props.showSideNav && (
        <Sidebar closeSideNavHandler={props.closeSideNavHandler} />
      )}
      {showNav && (
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
      )}
    </div>
  );
};

export default Navbar;
