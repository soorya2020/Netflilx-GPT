import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants";

export const useNowPlayingMovies = () => {
  const nowPlayingMovies = useSelector((store) => store.movie.nowPlayingMovie);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    await fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => dispatch(addNowPlayingMovies(json?.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    !nowPlayingMovies && fetchData();
  }, []);
};
