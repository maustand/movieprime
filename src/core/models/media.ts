export interface Media {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  vote_average: number;
  vote_count: number;
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
}

export interface Genre {
  id: number;
  name: string;
}

export enum CategoryMedia {
  AIRING_TODAY = "airing_today",
  ON_THE_AIR = "on_the_air",
  POPULAR = "popular",
  TOP_RATED = "top_rated",
  NOW_PLAYING = "now_playing",
  UPCOMING = "upcoming",
}
