import React from "react";
import { MainBanner } from "../MainBanner/MainBanner";
import { Tours } from "./Tours/Tours";
import { VideoBanner } from "./VideoBanner/VideoBanner";
import { Tracks } from "./Tracks/Tracks";
import { ShopBanner } from "./ShopBanner/ShopBanner";
import { News } from "./News/News";

export const Home = () => (
  <main className="main">
    <MainBanner />
    <Tours />
    <VideoBanner />
    <Tracks />
    <ShopBanner />
    <News />
  </main>
);
