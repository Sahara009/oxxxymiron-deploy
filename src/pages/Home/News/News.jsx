import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Effects } from "../../../components/Effects/Effects";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { useCallback } from "react";
import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper } from "swiper/react";
import "swiper/css";
import { SwiperSlide } from "swiper/react";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton from "react-loading-skeleton";
//components
import { getNews } from "../../../redux/reducers/NewsSlice";
import { Icon } from "../../../components/Header/Socials/Icons/Icon";
import "../../../styles/root.scss";
import { NewsSkeleton } from "./Skeleton/NewsSkeleton";

export const News = () => {
  const dispatch = useDispatch();
  // const news = useSelector((state) => state.news.news);
  const isLoading = useSelector((state) => state.news.isLoading);
  const sliderRef = useRef();

  const buttonTypes = useMemo(
    () => ({
      next: "next",
      prev: "prev",
    }),
    []
  );

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  const handleButtonClick = useCallback(
    (type) => {
      if (!sliderRef.current) return;

      const { swiper } = sliderRef.current;

      if (type === buttonTypes.next) {
        swiper.slideNext();
      } else if (type === buttonTypes.prev) {
        swiper.slidePrev();
      }
    },
    [buttonTypes]
  );

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
    <Effects className="news-section">
      <div className="container">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          animateOut="animate__backOutRight"
          delay={100}
          offset={0}
        >
          <h2>Новости</h2>
        </AnimationOnScroll>

        {isLoading ? (
          <NewsSkeleton />
        ) : (
          <Swiper
            ref={sliderRef}
            spaceBetween={24}
            slidesPerView={4}
            className="news"
            navigation
            modules={[Navigation]}
            breakpoints={{
              1366: {
                slidesPerView: 3,
              },
              720: {
                slidesPerView: 3,
              },
              360: {
                slidesPerView: 2,
              },
            }}
          >
            {news.map(({ title, id, cover, date }, i) => (
              <SwiperSlide key={id}>
                <AnimationOnScroll
                  animateIn="animate__fadeInLeft"
                  animateOut="animate__backOutRight"
                  delay={i * 100}
                >
                  <Link className="news-item" to={`/news/${id}`}>
                    <div className="news-item__img">
                      <img src={cover} alt={title} />
                    </div>
                    <h3 className="news-item__title">{title}</h3>
                  </Link>
                </AnimationOnScroll>
              </SwiperSlide>
            ))}
            <div className="navigation">
              <div
                className="navigation-button navigation-prev"
                onClick={() => handleButtonClick(buttonTypes.prev)}
              >
                <Icon name="slider-arrow" />
              </div>
              <div
                className="navigation-button navigation-next"
                onClick={() => handleButtonClick(buttonTypes.next)}
              >
                <Icon name="slider-arrow" />
              </div>
            </div>
          </Swiper>
        )}
      </div>
    </Effects>
  );
};
