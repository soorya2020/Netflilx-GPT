import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addTrailerVideo } from "../redux/movieSlice";
import { useEffect } from "react";

export const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );

      const json = await data.json();
      const trailerList = json.results.filter(
        (video) => video.type == "Trailer"
      );

      const trailer = trailerList.length ? trailerList[0] : json.results[0]; // fallback if no "Triler" is found in results
      dispatch(addTrailerVideo(trailer));
    } catch (error) {
      console.error(error);
    }
  };
};
