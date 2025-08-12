import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import movieReducer from "../redux/movieSlice";
import gptSearchReducer from "../redux/gptSlice";
import appConfigSlice from "../redux/appConfigSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gpt: gptSearchReducer,
    appConfig: appConfigSlice,
  },
});

export default store;
