import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "../../components/Header/Socials/Icons/Icon";
import { Link } from "react-router-dom";
import { getNews } from "../../redux/reducers/NewsSlice";
import "../../styles/root.scss";
import { NewsPageSkeleton } from "./Skeleton/NewsPageSkeleton";

export const NewsPage = () => {
  const dispatch = useDispatch();
  // const news = useSelector((state) => state.news.news);
  const isLoading = useSelector((state) => state.news.isLoading);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  let news = [
    {
      id: 1,
      cover: "https://i.ytimg.com/vi/75CkkZHIT14/maxresdefault.jpg",
      title: "Oxxxymiron - Лондон (World Tour 2023) - YouTube",
    },
    {
      id: 2,
      cover: "https://i.ytimg.com/vi/kiLxjdQ4oPo/maxresdefault.jpg",
      title: "OXXXYMIRON - Тель-Авив (World Tour 2023) - YouTube",
    },
    {
      id: 3,
      cover:
        "https://avatars.mds.yandex.net/i?id=a384e8c88c2a59b36431700fbd280f6d_l-9285955-images-thumbs&n=13",
      title: "ПРИГЛАШЕНИЕ НА МИРОВОЙ ТУР OXXXYMIRON 2023/2024 -",
    },
    {
      id: 4,
      cover:
        "https://avatars.mds.yandex.net/i?id=8f6b9df5837a2114a35dd70b06abc851_l-9806046-images-thumbs&n=13",
      title: "MAKING OF: ЛИГА ОПАСНОГО ИНТЕРНЕТА (2023) - YouTube",
    },
  ];

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
