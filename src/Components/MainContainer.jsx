import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { getRandomItemFromList } from "../utils";

function MainContainer() {
  const movies = useSelector((store) => store.movie?.nowPlayingMovie);

  if (!movies) {
    return <div>Loading...</div>; // Or a skeleton UI
  }

  const mainMovie = getRandomItemFromList(movies);
  const { overview, original_title, id } = mainMovie;
  return (
    <>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </>
  );
}

export default MainContainer;
