import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

function GptMovieSuggestions() {
  const { gptMovies, searchResults } = useSelector((store) => store.gpt);
  if (!searchResults) return;
  return (
    <div className=" mt-10 md:mt-36 ">
      <div>
        {gptMovies.map((movies, index) => {
          if (movies.length === 0) {
            return;
          } else {
            return (
              <MovieList
                key={movies.id || index}
                title={searchResults[index]}
                movies={movies}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default GptMovieSuggestions;
