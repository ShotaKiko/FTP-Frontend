import React from "react";
import "./App.scss";

import Navbar from "./components/Navigation/Navbar.js";
import Intro from "./components/MarketingContent/LandingContent/Introduction/Intro";
import AdditionalInfo from "./components/MarketingContent/LandingContent/AdditionalInfo/AdditionalInfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AdditionalInfo />
    </div>
  );
}

export default App;
