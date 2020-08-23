import React from "react";
import "./App.scss";

import Navbar from "./components/Navigation/Navbar.js";
import LandingDiv from "./components/MarketingContent/LandingDiv";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingDiv />
    </div>
  );
}

export default App;
