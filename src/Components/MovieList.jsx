import React, { useRef } from "react";
import MovieCard from "./MovieCard";
import ArrowSvg from "./ArrowSvg";
function MovieList({ title, movies }) {
  const scrollRef = useRef(null);

  const scrollRight = (e) => {
    scrollRef.current.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  const scrollLeft = (e) => {
    scrollRef.current.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  return (
    <div className=" p-2 bg-black bg-opacity-50">
      <h1 className="text-xl md:text-3xl py-2 text-white">{title}</h1>
      <div ref={scrollRef} className="flex overflow-x-scroll scrollbar-hide ">
        <div className="flex ">
          {movies &&
            movies?.map((item) => (
              <MovieCard key={item.id} posterPath={item.poster_path} />
            ))}
        </div>
        <div>
          <button
            onClick={scrollRight}
            className=" absolute bg-black px-5 py-32 right-1 hidden md:block opacity-40"
          >
            <ArrowSvg value={"right"} />
          </button>
          <button
            onClick={scrollLeft}
            className=" absolute bg-black  px-5 py-32 left-1 hidden md:block opacity-40"
          >
            <ArrowSvg value={"left"} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieList;
