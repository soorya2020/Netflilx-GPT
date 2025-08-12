import { useDispatch } from "react-redux";
import { addNowPlayingMovies, addPopularMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants";

export const usePopularMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
    await fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => dispatch(addPopularMovies(json?.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
};
