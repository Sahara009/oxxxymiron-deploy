import React from "react";
import "../../../../styles/root.scss";

export const Icon = ({ name, width, height }) => (
  <svg className={`icon icon-${name}`} style={{ width, height }}>
    <use
      xlinkHref={`${process.env.PUBLIC_URL}/sprite/sprite.svg#${name}`}
    ></use>
  </svg>
);
