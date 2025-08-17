import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE } from "../constants";

function GptSearch() {
  return (
    <div className=" ">
      <div className="fixed   -z-10">
        <img
          className="h-screen object-cover md:h-auto "
          src={BG_IMAGE}
          alt=""
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
