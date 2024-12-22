export enum Genres {
  ACTION = 28,
  ADVENTURE = 12,
  ANIMATION = 16,
  COMEDY = 35,
  CRIME = 80,
  DOCUMENTARY = 99,
  DRAMA = 18,
  FAMILY = 10751,
  FANTASY = 14,
  HISTORY = 36,
  HORROR = 27,
  MUSIC = 10402,
  MYSTERY = 9648,
  ROMANCE = 10749,
  SCIENCE_FICTION = 878,
  TV_MOVIE = 10770,
  THRILLER = 53,
  WAR = 10752,
  WESTERN = 37,
}

export interface Movie {
  id: number;
  adult: boolean;
  backdrop_path: string;
  genre_ids: Genres[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string; // ISO 8601 format (YYYY-MM-DD)
  title: string;
  vote_average: number;
  vote_count: number;
  video: boolean;
}

export interface Genre {
  id: number;
  name: string;
}
