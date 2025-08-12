import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../constants";
import { addTrailerVideo } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTrailerVideo } from "../Hooks/useTrailerVideo";

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movie.trailerVedio);
  useTrailerVideo(movieId);
  if (!movieId) return;
  return (
    <div className="  w-full aspect-video bg-gradient-to-r from-black">
      <iframe
        className=" aspect-video  bg-gradient-to-t from-black"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?si=S1yI-GQFznhKcKG6&amp;controls=0&autoplay=1&mute=1`}
    
        frameBorder="0"
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
}

export default VideoBackground;
