import React from "react";
import { IMG_CDN_URL } from "../constants";

function MovieCard({ posterPath }) {
  if (!posterPath) return;
  return (
    <div className=" w-36 px-1 md:w-48 md:px-3 transform transition-transform duration-500 hover:scale-110  ">
      <img src={IMG_CDN_URL + posterPath} alt="movie card" />
    </div>
  );
}

export default MovieCard;
