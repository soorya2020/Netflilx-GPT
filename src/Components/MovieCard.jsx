import React from "react";
import { IMG_CDN_URL } from "../constants";

function MovieCard({ posterPath }) {
  
  return (
    <div className="w-48 px-2 ">
      <img src={IMG_CDN_URL + posterPath} alt="movie card" />
    </div>
  );
}

export default MovieCard;
