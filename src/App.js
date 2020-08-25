import React from "react";
import "./App.scss";

import Navbar from "./components/Navigation/Navbar.js";
import Intro from "./components/MarketingContent/LandingContent/Introduction/Intro";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
    </div>
  );
}

export default App;
