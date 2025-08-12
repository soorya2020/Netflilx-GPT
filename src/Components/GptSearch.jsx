import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_IMAGE } from "../constants";

function GptSearch() {
  return (
    <div className="">
      <div className="absolute w-full -z-10">
        <img className="w-full" src={BG_IMAGE} alt="" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
}

export default GptSearch;
