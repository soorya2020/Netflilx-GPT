import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import movieReducer from "../redux/movieSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default store;
