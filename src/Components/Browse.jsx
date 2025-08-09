import React, { useEffect } from "react";
import Header from "./Header";
import { useNowPlayingMovies } from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
function Browse() {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      MainConintasner
        vedio bg
        vedio title
      SecondaryContainer
        moviewliset*n
          cardList*n 
       */}
    </>
  );
}

export default Browse;
