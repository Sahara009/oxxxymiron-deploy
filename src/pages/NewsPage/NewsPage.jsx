import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../components/Header/Socials/Icons/Icon";
import { Link } from "react-router-dom";
import { getNews } from "../../redux/reducers/NewsSlice";
import "../../styles/root.scss";
import { NewsPageSkeleton } from "./Skeleton/NewsPageSkeleton";

export const NewsPage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.news);
  const isLoading = useSelector((state) => state.news.isLoading);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <section className="news-page page">
      <div className="container">
        <h2 className="news_title">Все новости</h2>

        {isLoading ? (
          <NewsPageSkeleton />
        ) : (
          <div className="news-list">
            {news.map(({ title, date, cover, id }) => {
              return (
                <div className="news-list__item" key={id}>
                  <div
                    className="news-list__item-img"
                    style={{ backgroundImage: `url(${cover})` }}
                  />
                  <div className="news-list__item-info">
                    <p className="news-list__item-date">{date}</p>
                    <h2 className="news-list__item-title">{title}</h2>
                    <Link to={`/news/${id}`} className="news-list__item-button">
                      <span>Читать</span>
                      <Icon name="arrow-right" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
