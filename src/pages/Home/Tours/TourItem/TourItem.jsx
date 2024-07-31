import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "../../../../styles/root.scss";
import { Icon } from "../../../../components/Header/Socials/Icons/Icon";

export const TourItem = ({
  place,
  date,
  city,
  country,
  videoLink,
  soldOut,
  i,
  id,
}) => {
  return (
    <li>
      <AnimationOnScroll
        className="tour_item"
        animateIn="animate__fadeInLeft"
        animateOut="animate__fadeOutRight"
        delay={i * 100}
      >
        <div className="tour_item_info">
          <div className="tour_date">
            {new Date(date).toLocaleDateString("ru-RU", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <p className="tour_place">{place}</p>
        </div>
        <p className="tour_city">{city}</p>
        {!soldOut ? (
          <a href={videoLink} target="__black" className="tour_button">
            <span>ВИДЕО</span>
            <Icon name="arrow-right" />
          </a>
        ) : (
          <button className="tour_button soldout">SOLDOUT</button>
        )}
      </AnimationOnScroll>
    </li>
  );
};
