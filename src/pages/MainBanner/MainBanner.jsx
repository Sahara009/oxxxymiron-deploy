import React from "react";
import { Effects } from "../../components/Effects/Effects";
import video from "../../assets/images/text.webm";
import "../../styles/root.scss";

export const MainBanner = () => (
  <Effects>
    <div className="container">
      <div className="banner">
        <video
          className="banner_video"
          width={1000}
          height="auto"
          loop
          muted
          autoPlay
        >
          <source src={video} type="video/webm" />
        </video>
      </div>
    </div>
  </Effects>
);
