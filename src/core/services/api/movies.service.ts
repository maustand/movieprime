import { Movie, MovieDetails } from "@/core/models/movies";
import { TMDBQueryParams, TMDBResponse } from "@/core/models/tmdb";
import axios from "@/core/services/axios/axios.service";

const MoviesService = (() => {
  const entryPoint = `/movie`;

  function getNowPlaying(query?: TMDBQueryParams): TMDBResponse<Movie> {
    return axios
      .get<TMDBResponse<Movie>>(`${entryPoint}/now_playing`, {
        params: query,
      })
      .then(({ data: results }) => results);
  }

  function getPopular(query?: TMDBQueryParams): TMDBResponse<Movie> {
    return axios
      .get<TMDBResponse<Movie>>(`${entryPoint}/popular`, {
        params: query,
      })
      .then(({ data: results }) => results);
  }

  function getUpcoming(query?: TMDBQueryParams): TMDBResponse<Movie> {
    return axios
      .get<TMDBResponse<Movie>>(`${entryPoint}/upcoming`, {
        params: query,
      })
      .then(({ data: results }) => results);
  }

  function show(movieId: number): Promise<MovieDetails> {
    return axios
      .get<Promise<MovieDetails>>(`${entryPoint}/${movieId}`)
      .then(({ data: movie }) => movie);
  }

  return { getNowPlaying, getPopular, show, getUpcoming };
})();

export default MoviesService;
