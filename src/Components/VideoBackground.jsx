import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../constants";
import { addTrailerVideo } from "../redux/movieSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTrailerVideo } from "../Hooks/useTrailerVideo";

function VideoBackground({ movieId }) {
  const trailerVideo = useSelector((store) => store.movie.trailerVedio);
  useTrailerVideo(movieId);

  return (
    <div className="w-screen aspect-video">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?si=S1yI-GQFznhKcKG6&amp;controls=0&autoplay=1&mute=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        // allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoBackground;
