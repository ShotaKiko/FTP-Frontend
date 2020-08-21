import React from "react";
import Bus from "../icons/cuteBus.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
    <div className="navContainer">
      <div className="navDiv">
        <div className="leftSideNav">
          <div className="logoContainer">
            <img src={Bus} alt="School Bus" />
          </div>
          <div className="title">
            <h1>Field Trip Planner</h1>
          </div>
        </div>
        <div className="rightSideNav">
          <div className="navLinks">
            <a>How it works</a>
            <a>Learn More</a>
          </div>
          <div className="onboardingLinks">
            <a href="#">Log in</a>
            <a href="#">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
}
