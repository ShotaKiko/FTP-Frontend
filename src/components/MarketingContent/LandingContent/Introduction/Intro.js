import React from "react";
import "./Intro.scss";

import VideoPlayer from "../VideoPlayer/VideoPlayer.js";
import { Jumbotron, Button } from "reactstrap";

import Admin from "../../../../icons/administrator.svg";
import Teacher from "../../../../icons/teacherDesk.svg";
import Parent from "../../../../icons/parentHouse.svg";
import Student from "../../../../icons/studentBackpack.svg";
import SchoolBus from "../../../../icons/schoolBus.svg";

function Intro() {
  return (
    <div className="intro-container">
      <div className="leftSide">
        <Jumbotron className="jumbotron">
          <h2 className="display-4">
            Make planning every field<br></br>trip as easy as A, B, C
          </h2>
          <p className="lead">
            One simple to use app for all your field trip needs!{" "}
          </p>
          <hr className="my-2" />
          <p>Sign up as a...</p>
          <p className="options">
            <Button className="signInOptionButton" outline color="primary">
              <img src={Teacher} alt="Teacher Desk" />
              Teacher
            </Button>
            <Button className="signInOptionButton" outline color="primary">
              <img src={Parent} alt="Parent's home" />
              Parent
            </Button>
            <Button className="signInOptionButton" outline color="primary">
              <img src={Student} alt="Student Backpack" />
              Student
            </Button>
            <Button className="signInOptionButton" outline color="primary">
              <img src={Admin} alt="Admin Badge" />
              Administrator
            </Button>
            <Button className="signInOptionButton" outline color="primary">
              <img src={SchoolBus} alt="School Bus" />
              Bus Driver
            </Button>
          </p>
        </Jumbotron>
      </div>

      <div className="rightSide">
        <VideoPlayer />
      </div>
    </div>
  );
}

export default Intro;
