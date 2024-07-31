import React, { useEffect, useState } from "react";
import "../../styles/root.scss";
import { useDispatch, useSelector } from "react-redux";
import { ToursSkeleton } from "../Home/Tours/Skeleton/ToursSkeleton";
import { TourItem } from "../Home/Tours/TourItem/TourItem";
import { getTours } from "../../redux/reducers/TourSlice";

export const TourPage = () => {
  const dispatch = useDispatch();
  const { tours, isLoading } = useSelector((state) => state.tour);
  const [filtered, setFiltered] = useState([]);

  // сет что бы не повторялись
  const countries = [...new Set(tours.map(({ country }) => country))];

  const filteredTours = tours?.filter(({ soldOut }) => !soldOut).slice(0, 5);
  useEffect(() => {
    setFiltered(filteredTours);
    //то есть делать запрос только при наличии того что туров нет
    !tours.length && dispatch(getTours());
  }, [tours, dispatch]);

  const countryFilter = (con) => {
    setFiltered(tours.filter(({ country }) => country === con));
  };

  return (
    <section className="tour_page page">
      <div className="container">
        <h1 className="tour_title">Все концерты</h1>
        {isLoading ? (
          <ToursSkeleton />
        ) : (
          <>
            <ul className="tour_countries">
              {countries.map((con) => (
                <li
                  onClick={() => countryFilter(con)}
                  key={con}
                  className="tour_con"
                >
                  {con}
                </li>
              ))}
            </ul>
            <ul className="tour_items">
              {filtered.map((tour, i) => (
                <TourItem offset={100} key={tour.id} {...tour} i={i} />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};
