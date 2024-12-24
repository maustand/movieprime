export interface Media {
  id: number;
  adult: false;
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
