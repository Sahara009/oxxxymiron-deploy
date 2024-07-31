import React from "react";
import { Effects } from "../../../components/Effects/Effects";
import "../../../styles/root.scss";
import video from "../../../assets/images/oxxxytour.mp4";

export const VideoBanner = () => {
  return (
    <Effects className="video_banner">
      <div className="container">
        <video loop muted autoPlay>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </Effects>
  );
};
