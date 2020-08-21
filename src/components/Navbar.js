import React from "react";
import Bus from "../icons/cuteBus.png";

export default function Navbar() {
  return (
    <div className="navContainer">
      <div className="leftSideNav">
        <div className="logoContainer">
          <img src={Bus} alt="School Bus" />
        </div>
        <div className="title">
          <h1>Field Trip Planner</h1>
        </div>
      </div>
      <div className="rightSideNav"></div>
    </div>
  );
}
