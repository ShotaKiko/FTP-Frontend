import React from "react";
import "./Intro.scss";

import VideoPlayer from "../VideoPlayer/VideoPlayer.js";
import {
  Jumbotron,
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
        <Jumbotron className="jumbotron">
          <h2 className="display-4">
            Make planning every field trip<br></br> as easy as A, B, C
          </h2>
          <p className="lead">
            One simple to use app for all your field trip needs!{" "}
          </p>
          <hr className="my-2" />
          <p>Sign up as a...</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
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
