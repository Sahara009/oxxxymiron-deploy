import React, { useEffect } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
// components
import { TourItem } from "./TourItem/TourItem";
import { Effects } from "../../../components/Effects/Effects";
import { getTours } from "../../../redux/reducers/TourSlice";
// styles
import "../../../styles/root.scss";
import { ToursSkeleton } from "./Skeleton/ToursSkeleton";

export const Tours = () => {
  const dispatch = useDispatch();
  const { tours, isLoading } = useSelector((state) => state.tour);

  useEffect(() => {
    dispatch(getTours());
  }, [dispatch]);

  //распроданные не показываем и только 5 билетов
  const filteredTours = tours?.filter(({ soldOut }) => !soldOut).slice(0, 5);

  return (
    <Effects className="tour">
      <div className="container">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__backOutRight"
          delay={100}
          offset={0}
        >
          <h2>Концерты</h2>
        </AnimationOnScroll>

        {isLoading ? (
          <ToursSkeleton />
        ) : (
          <ul className="tours_list">
            {filteredTours.map((tour, i) => (
              <TourItem {...tour} i={i} key={tour.id} />
            ))}
          </ul>
        )}
        <Link to={"/tour"} className="more_button">
          Все концерты
        </Link>
      </div>
    </Effects>
  );
};
