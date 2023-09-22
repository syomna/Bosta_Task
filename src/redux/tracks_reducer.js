import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTrackService } from "../services/tracks_services";
export const getTrack = createAsyncThunk("tracks/getTrack", async (trackNo) => {
  return getTrackService(trackNo);
});
const TracksReducer = createSlice({
  name: "tracks",
  initialState: {
    isMenuShown: false,
    trackData: {},
    isLoading: false,
    error: null,
  },
  reducers: {
    changeMenu: (state) => {
      state.isMenuShown = !state.isMenuShown;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrack.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getTrack.fulfilled, (state, action) => {
        if (action.payload !== null && action.payload !== undefined)
          state.trackData = action.payload;
        else {
          state.error = "error";
          state.trackData = {};
        };
        state.isLoading = false;
      })
      .addCase(getTrack.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "error";
        state.trackData = {};
      });
  },
});
export const { changeMenu } = TracksReducer.actions;

export default TracksReducer.reducer;
