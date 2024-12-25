import { CategoryMedia, Genre, Media } from "./media";

export interface Serie extends Media {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
}

export interface SerieDetails extends Serie {
  status: string;
  tagline: string;
  type: string;
  episode_run_time: number[];
  last_air_date: number;
  in_production: boolean;
  genres: Genre[];
}

export const CategorySerieTitles: Partial<Record<CategoryMedia, string>> = {
  [CategoryMedia.AIRING_TODAY]: "Airing Today",
  [CategoryMedia.ON_THE_AIR]: "On Air in the next 7 days.",
  [CategoryMedia.POPULAR]: "Popular",
  [CategoryMedia.TOP_RATED]: "Top Rated",
};
