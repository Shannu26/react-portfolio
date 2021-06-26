import "./App.css";

import BackgroundCircles from "./components/BackgroundCircles/BackgroundCircles";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <BackgroundCircles />
      <section>
        <Home />
      </section>
    </div>
  );
}

export default App;
