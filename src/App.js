import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useLayoutEffect } from "react";

import BackgroundCircles from "./components/BackgroundCircles/BackgroundCircles";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import MyProjects from "./components/MyProjects/MyProjects";
import ContactMe from "./components/ContactMe/ContactMe";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [showSideNav, setShowSideNav] = useState(false);

  useLayoutEffect(() => {
    const sizeChangeHandler = () => {
      if (window.innerWidth >= 800) {
        setShowSideNav(false);
      }
    };
    window.addEventListener("resize", sizeChangeHandler);

    return () => {
      window.removeEventListener("resize", sizeChangeHandler);
    };
  });

  const toggleSideNavHandler = () => {
    setShowSideNav((prev) => !prev);
  };

  const closeSideNavHandler = () => {
    setShowSideNav(false);
  };
  return (
    <div className="App">
      <BackgroundCircles />
      <section>
        <Navbar
          toggleSideNavHandler={toggleSideNavHandler}
          showSideNav={showSideNav}
          closeSideNavHandler={closeSideNavHandler}
        />
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/about-me" exact>
            <AboutMe />
          </Route>
          <Route path="/my-projects" exact>
            <MyProjects />
          </Route>
          <Route path="/contact-me" exact>
            <ContactMe />
          </Route>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
