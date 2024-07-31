import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getNewsItem } from "../../redux/reducers/NewsSlice";
import "../../styles/root.scss";
import { NewsSingleSkeleton } from "./Skeleton/NewsSingleSkeleton";

export const NewsSingle = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const item = useSelector((state) => state.news.item);
  const isLoading = useSelector((state) => state.news.isLoading);

  useEffect(() => {
    dispatch(getNewsItem(id));
  }, [dispatch, id]);

  return (
    <section className="page news-single">
      <div className="container">
        {isLoading || !item ? (
          <NewsSingleSkeleton />
        ) : (
          <>
            <div className="news-single__item">
              <h1 className="news-single__item-title">{item.title}</h1>
              <p className="news-single__item-date">{item.date}</p>
              <a href={item.link}>
                <img
                  className="news-single__item-image"
                  src={item.cover}
                  alt={item.title}
                />
              </a>

              <div className="news-single__item-wrapper">
                <div className="news-single__item-content">
                  {item.description}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
