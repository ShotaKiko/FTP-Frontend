import React from "react";
import VideoPlayer from "../VideoPlayer/VideoPlayer.js";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

function Intro() {
  return (
    <div className="intro-container">
      <div className="leftSide">
        <div className="messageDiv">
          <h2>Make every field trip as easy as A, B, C</h2>
          <h5>One simple to use app for all your field trip needs!</h5>
          <p>Sign up as a...</p>
        </div>
        <div className="signUpOptions">
          <Card>
            <CardTitle>Teacher</CardTitle>
          </Card>
          <Card>
            <CardTitle>Parent</CardTitle>
          </Card>
          <Card>
            <CardTitle>Administrator</CardTitle>
          </Card>
          <Card>
            <CardTitle>Student</CardTitle>
          </Card>
          <Card>
            <CardTitle>Bus Driver</CardTitle>
          </Card>
        </div>
      </div>

      <div className="rightSide">
        <VideoPlayer />
      </div>
    </div>
  );
}

export default Intro;
