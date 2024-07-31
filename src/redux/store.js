import { configureStore } from "@reduxjs/toolkit";

import TourSlice from "./reducers/TourSlice";
import TrackSlice from "./reducers/TrackSlice";
import NewsSlice from "./reducers/NewsSlice";

export const store = configureStore({
  reducer: {
    tour: TourSlice,
    track: TrackSlice,
    news: NewsSlice,
  },
  devTools: true,
});
