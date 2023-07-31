import React from "react";
import Card from "../../../elements/Card";
import { videoArr } from "../utils/videos";

export default function VideoPlayer(props) {
  const { video } = props;

  const videos = videoArr.map((e, index) => {
    return (
      <video
        key={index}
        style={{ display: video === index ? "block" : "none" }}
        src={videoArr[index]}
        autoPlay
        loop
        muted
      >
        <source src={videoArr[index]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  });

  return (
    <div className="video-player-container">
      <Card id={0}>{videos}</Card>
    </div>
  );
}
