import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTracks } from "../../../redux/reducers/TrackSlice";
import { Effects } from "../../../components/Effects/Effects";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";
import { Icon } from "../../../components/Header/Socials/Icons/Icon";
import "../../../styles/root.scss";

import "react-loading-skeleton/dist/skeleton.css"; // Импортируйте стили
import { TracksSkeleton } from "./Skeleton/TracksSkeleton";

export const Tracks = () => {
  const dispatch = useDispatch();
  const { tracks, isLoading } = useSelector((state) => state.track);

  const [audio] = useState(new Audio());
  const [play, setPlay] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    dispatch(getTracks());
  }, [dispatch]);

  const clickTrack = (track) => {
    // Если текущий трек тот же, что и выбранный, переключаем состояние воспроизведения
    if (currentTrack?.id === track.id) {
      setPlay((prev) => {
        if (prev) {
          audio.pause();
        } else {
          audio.play();
        }
        return !prev;
      });
    } else {
      // Если выбран другой трек, устанавливаем новый источник и воспроизводим его
      // audio.src = track.Link;
      // audio.play();
      // setCurrentTrack(track);
      // setPlay(true);
      alert("авторские права запрещают (но логика прописана)");
    }
  };

  return (
    <>
      <Effects className="tracks-section">
        <div className="container">
          <AnimationOnScroll
            animateIn="animate__fadeInLeft"
            animateOut="animate__fadeOutRight"
            delay={200}
          >
            <h2>Релизы</h2>
          </AnimationOnScroll>

          {isLoading ? (
            <TracksSkeleton />
          ) : (
            <div className="tracks">
              {tracks
                .filter((_, i) => i < 3)
                .map((track) => {
                  const { cover, title, id, date } = track;

                  return (
                    <AnimationOnScroll
                      animateIn="animate__backInLeft"
                      animateOut="animate__fadeOutRight"
                      className="track_item"
                      delay={100}
                      key={id}
                    >
                      <div className="track" onClick={() => clickTrack(track)}>
                        <div className="track-image">
                          <img width={300} src={cover} alt={title} />
                          {!!play && currentTrack.id === id && (
                            <Icon name="pause" />
                          )}
                        </div>
                        <p className="track-date">{date}</p>
                        <h3 className="track-title">{title}</h3>
                      </div>
                    </AnimationOnScroll>
                  );
                })}
            </div>
          )}

          <Link to="/tracks" className="more_button">
            Все релизы
          </Link>
        </div>
      </Effects>
    </>
  );
};
