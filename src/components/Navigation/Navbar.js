import React from "react";
import Bus from "../../icons/cuteBus.png";
import "./Navbar.scss";

import { Button } from "reactstrap";

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
            <a href="#">How it works</a>
            <a href="#">Learn More</a>
          </div>
          <div className="onboardingLinks">
            <Button outline color="primary" href="#">
              Sign up
            </Button>
            <Button color="primary" href="#">
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
