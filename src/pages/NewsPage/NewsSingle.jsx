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

  // const item = useSelector((state) => state.news.item);
  const isLoading = useSelector((state) => state.news.isLoading);

  // useEffect(() => {
  //   dispatch(getNewsItem(id));
  // }, [dispatch, id]);

  let news = [
    {
      id: 1,
      cover: "https://i.ytimg.com/vi/75CkkZHIT14/maxresdefault.jpg",
      title: "Oxxxymiron - Лондон (World Tour 2023) - YouTube",
      description:
        "Oxxxymiron - Лондон (World Tour 2023) - YouTube: Концертное выступление Oxxxymiron'а в рамках его мирового тура 2023 года. Шоу прошло в Лондоне, впечатлив зрителей масштабным перфомансом, глубокими текстами и невероятной энергией артиста. Это событие стало частью его глобального путешествия, объединяющего поклонников из разных уголков мира.",
    },
    {
      id: 2,
      cover: "https://i.ytimg.com/vi/kiLxjdQ4oPo/maxresdefault.jpg",
      title: "OXXXYMIRON - Тель-Авив (World Tour 2023) - YouTube",
      description:
        "Концерт Oxxxymiron'а в Тель-Авиве стал одной из ярчайших остановок его мирового тура 2023 года. Артист подарил зрителям незабываемое шоу, наполненное мощной энергетикой, уникальной атмосферой и глубокими текстами, которые тронули сердца поклонников. Это выступление объединило любителей музыки и искусства со всего Израиля.",
    },
    {
      id: 3,
      cover:
        "https://avatars.mds.yandex.net/i?id=a384e8c88c2a59b36431700fbd280f6d_l-9285955-images-thumbs&n=13",
      title: "ПРИГЛАШЕНИЕ НА МИРОВОЙ ТУР OXXXYMIRON 2023/2024 -",
      description:
        "Специальное видеообращение Oxxxymiron'а с приглашением на его грандиозный мировой тур 2023/2024 года. Артист делится подробностями о предстоящих шоу, их концепции и значимости, обещая своим фанатам незабываемые эмоции и уникальную атмосферу. Это приглашение нельзя пропустить!",
    },
    {
      id: 4,
      cover:
        "https://avatars.mds.yandex.net/i?id=8f6b9df5837a2114a35dd70b06abc851_l-9806046-images-thumbs&n=13",
      title: "MAKING OF: ЛИГА ОПАСНОГО ИНТЕРНЕТА (2023) - YouTube",
      description:
        "Закулисный взгляд на создание проекта 'Лига Опасного Интернета' 2023 года. Видео раскрывает процесс работы над этим масштабным и актуальным проектом, включая съёмки, подготовку и ключевые моменты, которые остались за кадром. Захватывающее путешествие в мир творчества и технологий.",
    },
  ];
  const item = news.find((item) => item.id == id);

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
