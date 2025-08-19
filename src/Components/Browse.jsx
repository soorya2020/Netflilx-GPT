import React, { useEffect } from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../Hooks/useNowPlayingMovies";
import { usePopularMovies } from "../Hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Footer from "./Footer";
import GptSearch from "./GptSearch";
import { useUpComingMovies } from "../Hooks/useUpComingMovies";
import { useSelector } from "react-redux";
function Browse() {
  useNowPlayingMovies();
  usePopularMovies();
  useUpComingMovies();
  const showSearch = useSelector((store) => store.gpt.showSearch);

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
      {!showSearch && <Footer />}
    </>
  );
}

export default Browse;
