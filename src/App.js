import React from "react";
import "./App.scss";

import Navbar from "./components/Navigation/Navbar.js";
import VideoPlayer from "./components/MarketingContent/LandingContent/VideoPlayer/VideoPlayer.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <VideoPlayer />
    </div>
  );
}

export default App;
