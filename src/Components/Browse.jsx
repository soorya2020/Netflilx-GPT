import React, { useEffect } from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../Hooks/useNowPlayingMovies";
import { usePopularMovies } from "../Hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";
import { useUpComingMovies } from "../Hooks/useUpComingMovies";
import { useSelector } from "react-redux";
function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  const showSearch = useSelector((store) => store.gpt.showSearch);
  console.log(showSearch);

  return (
    <>
      <Header />
      {showSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </>
  );
}

export default Browse;
