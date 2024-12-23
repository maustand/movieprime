import { Serie } from "@/core/models/series";
import { TMDBQueryParams, TMDBResponse } from "@/core/models/tmdb";
import axios from "@/core/services/axios/axios.service";

const SeriesService = (() => {
  const entryPoint = `/tv`;

  function getAiringToday(query?: TMDBQueryParams): TMDBResponse<Serie> {
    return axios
      .get<TMDBResponse<Serie>>(`${entryPoint}/airing_today`, {
        params: query,
      })
      .then(({ data: results }) => results);
  }

  function getPopular(query?: TMDBQueryParams): TMDBResponse<Serie> {
    return axios
      .get<TMDBResponse<Serie>>(`${entryPoint}/popular`, {
        params: query,
      })
      .then(({ data: results }) => results);
  }

  function show(serieId: number): Promise<Serie> {
    return axios
      .get<Promise<Serie>>(`${entryPoint}/${serieId}`)
      .then(({ data: movie }) => movie);
  }

  return { getAiringToday, getPopular, show };
})();

export default SeriesService;
