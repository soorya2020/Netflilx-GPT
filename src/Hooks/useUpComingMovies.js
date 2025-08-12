import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants";

export const useUpComingMovies = () => {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";
    await fetch(url, API_OPTIONS)
      .then((res) => res.json())
      .then((json) => dispatch(addUpComingMovies(json?.results)))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
};
