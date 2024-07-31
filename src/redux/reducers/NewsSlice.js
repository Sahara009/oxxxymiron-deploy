import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk("news/getNews", async (_, thunkAPI) => {
  try {
    const response = await axios.get(
      "https://news-64fee-default-rtdb.europe-west1.firebasedatabase.app/data.json"
    );

    console.log(response);
    return Object.values(response.data);
  } catch (err) {
    console.log(err);
  }
});

export const getNewsItem = createAsyncThunk(
  "newsItem/getNewsItem",
  async (id, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://news-64fee-default-rtdb.europe-west1.firebasedatabase.app/data.json"
      );
      console.log(id);
      const items = Object.values(response.data);
      console.log(items);

      const data = items.filter((item) => item.id == id);
      const object = data.pop();
      console.log(object);

      return object;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err.message); // Возвращаем ошибку, если она есть
    }
  }
);

const initialState = {
  news: [],
  item: [],
  isLoading: false,
};

const NewsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.news = payload;
      })
      .addCase(getNews.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getNewsItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsItem.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.item = payload;
      })
      .addCase(getNewsItem.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default NewsSlice.reducer;
