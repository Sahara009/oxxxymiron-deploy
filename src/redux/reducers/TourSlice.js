import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTours = createAsyncThunk(
  "tours/getTours",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://665ecfbb1e9017dc16f18186.mockapi.io/tours"
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  tours: [],
  isLoading: false,
};

const TourSlice = createSlice({
  name: "tour",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTours.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTours.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tours = payload;
      })
      .addCase(getTours.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default TourSlice.reducer;
