import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import BackgroundCircles from "./components/BackgroundCircles/BackgroundCircles";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import MyProjects from "./components/MyProjects/MyProjects";
import ContactMe from "./components/ContactMe/ContactMe";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BackgroundCircles />
      <section>
        <Navbar />
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
