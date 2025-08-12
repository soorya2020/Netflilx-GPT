import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

function SecondaryContainer() {
  const movies = useSelector((store) => store.movie);
  // console.log(movies?.nowPlayingMovie);

  if (!movies) return <p>Loading...</p>;

  return (
    <div className="-mt-60 px-7 bg-black z-100">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovie} />
      <MovieList title={"Up Coming"} movies={movies.upComingMovies} />
      <MovieList title={"Popular"} movies={movies.popularMovies} />

      <MovieList title={"Most Liked"} movies={movies.upComingMovies} />
      <MovieList title={"Award nomines"} movies={movies.popularMovies} />
    </div>
  );
}

export default SecondaryContainer;
