import React from "react";
import ReactPlayer from "react-player/youtube";
import "./VideoPlayer.scss";

export default function LandingDiv() {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        light={false}
        url="https://www.youtube.com/watch?v=EWPFmdAWRZ0"
        width="80%"
        height="80%"
        style={{
          minHeight: "200px",
          minWidth: "300px",
        }}
      />
    </div>
  );
}
