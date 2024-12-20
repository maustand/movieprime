import { Movie } from "@/core/models/movies";
import { TMDBQueryParams, TMDBResponse } from "@/core/models/tmdb";
import axios from "@/core/services/axios/axios.service";

const MoviesService = (() => {
  const entryPoint = `/movie`;

  function getNowPlaying(query?: TMDBQueryParams): TMDBResponse<Movie> {
    return axios
      .get<TMDBResponse<Movie>>(`${entryPoint}/now_playing`, {
        params: query,
      })
      .then(({ data }) => data);
  }

  return { getNowPlaying };
})();

export default MoviesService;
