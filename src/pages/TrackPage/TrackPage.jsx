import React, { useEffect, useState } from "react";
import { getTracks } from "../../redux/reducers/TrackSlice";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../components/Header/Socials/Icons/Icon";
import { SkeletonTracksPage } from "./Skeleton/SkeletonTracksPage";

export const TrackPage = () => {
  const dispatch = useDispatch();
  const { tracks, isLoading } = useSelector((state) => state.track);

  const [audio] = useState(new Audio());
  const [play, setPlay] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    dispatch(getTracks());
  }, [dispatch]);

  const clickTrack = (track) => {
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
      // audio.src = track.Link;
      // audio.play();
      // setCurrentTrack(track);
      // setPlay(true);
      alert("авторские права запрещают (но логика прописана)");
    }
  };
  return (
    <section className="tracks-page page">
      <div className="container">
        {isLoading ? (
          <SkeletonTracksPage />
        ) : (
          <ul className="tracks-list">
            {tracks.map((track) => {
              const { id, title, cover, date, description } = track;

              const iconName =
                play && id === currentTrack?.id ? "pause" : "play";

              return (
                <>
                  <li key={id} className="tracks-list__item">
                    <div className="tracks-list__item-image">
                      <img width={300} src={cover} alt={title} />
                    </div>

                    <div className="tracks-list__item-info">
                      <p className="tracks-list__item-date">{date}</p>
                      <h2 className="tracks-list__item-title">{title}</h2>
                      <p className="tracks-list__item-description">
                        {description}
                      </p>
                    </div>

                    <button
                      className="tracks-list__item-button"
                      onClick={() => clickTrack(track)}
                    >
                      <span>слушать</span>
                      <Icon name={iconName} />
                    </button>
                  </li>
                </>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};
