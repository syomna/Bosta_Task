import { configureStore } from "@reduxjs/toolkit";
import tracksReducer from "./tracks_reducer";

const store = configureStore({
  reducer: {
    tracks: tracksReducer,
  },
});
export default store;
