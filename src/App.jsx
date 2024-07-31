import React from "react";
// styles
import s from "./styles/root.scss";
//conponents
import { Home } from "./pages/Home/Home";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { TrackPage } from "./pages/TrackPage/TrackPage";
import { TourPage } from "./pages/TourPage/TourPage";
import { NewsPage } from "./pages/NewsPage/NewsPage";
import { NewsSingle } from "./pages/NewsPage/NewsSingle";
import { ShopPage } from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <div className={s.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/tracks" element={<TrackPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/news/:id" element={<NewsSingle />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
