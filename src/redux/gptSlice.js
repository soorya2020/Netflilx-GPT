import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showSearch: false,
    gptMovies: null,
    searchResults: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showSearch = !state.showSearch;
    },
    addGptMovies: (state, action) => {
      state.gptMovies = action.payload.gptMovieList;
      state.searchResults = action.payload.searchResultList;
    },
    clearGptResutls: (state, action) => {
      state.gptMovies = null;
      state.searchResults = null;
    },
  },
});

export const { toggleGptSearchView, addGptMovies, clearGptResutls } =
  gptSlice.actions;

export default gptSlice.reducer;
