import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";

import BackgroundCircles from "./components/BackgroundCircles/BackgroundCircles";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import ContactMe from "./components/ContactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <BackgroundCircles />
      <section>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/about-me" exact>
            <AboutMe />
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
