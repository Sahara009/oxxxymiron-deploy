import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getTracks = createAsyncThunk(
  "tracks/getTracks",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get(
        "https://665ecfbb1e9017dc16f18186.mockapi.io/tracks"
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  }
);

const initialState = {
  tracks: [],
  isLoading: false,
};

const TrackSlice = createSlice({
  name: "track",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTracks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTracks.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.tracks = payload;
      })
      .addCase(getTracks.rejected, (state) => {
        state.isLoading = false;
      });
  },
});
export default TrackSlice.reducer;
