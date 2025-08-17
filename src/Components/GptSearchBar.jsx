import React, { useRef, useState } from "react";
import { LANGUAGE } from "../languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../openai";
import { getSearchQuery } from "../utils";
import { API_OPTIONS } from "../constants";
import { addGptMovies, clearGptResutls } from "../redux/gptSlice";

function GptSearchBar() {
  const language = useSelector((store) => store.appConfig.language);
  const [searchError, setSearchError] = useState(null);
  const [searchLoading, setSearchLoading] = useState(false);

  const searchRef = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";
    try {
      const response = await fetch(url, API_OPTIONS);
      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  const handleGptSearchClick = async () => {
    dispatch(clearGptResutls());
    if (searchRef.current.value.trim() === "") return;
    setSearchLoading(true);

    const response = await openai.responses.create({
      model: "gpt-3.5-turbo",
      // input: gptQuery,
      input: getSearchQuery(searchRef.current.value),
    });

    const searchMovieList = response.output_text.split(",");
    console.log(searchMovieList, "ss");

    if (searchMovieList == "null") {
      setSearchError("no data found for the given search");
      setSearchLoading(false);
      return;
    } else {
      setSearchError(null);
    }

    const promiseArray = searchMovieList.map((movie) => searchMovieTMDB(movie));
    const resultArray = await Promise.all(promiseArray);
    dispatch(
      addGptMovies({
        gptMovieList: resultArray,
        searchResultList: searchMovieList,
      })
    );
    setSearchLoading(false);
  };

  return (
    <div>
      <div className="pt-[60%] md:pt-56 flex justify-center">
        <form
          onSubmit={(e) => e.preventDefault()}
          action=""
          className=" text-sm w-full  md:w-1/2  grid grid-cols-12 rounded-sm "
        >
          <input
            ref={searchRef}
            className="p-4 m-2 col-span-9"
            type="text"
            name="Search"
            placeholder={LANGUAGE[language].GPT_SEARCH_PLACEHOLDER}
            id=""
          />
          <button
            onClick={handleGptSearchClick}
            className=" m-2 bg-red-700 rounded-sm col-span-3 text-white md:font-bold"
          >
            {searchLoading ? "Loading..." : LANGUAGE[language].SEARCH}
          </button>
        </form>
      </div>
      {searchError && (
        <div className=" bg-black text-white font-bold w-1/2 mx-auto right-0 left-0 mt-4 p-5 opacity-70 flex justify-center">
          <p>No movies for the given search</p>
        </div>
      )}
    </div>
  );
}

export default GptSearchBar;
