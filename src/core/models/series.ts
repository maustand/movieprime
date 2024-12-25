import { CategoryMedia, Media } from "./media";

export interface Serie extends Media {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
}

export const CategorySerieTitles: Partial<Record<CategoryMedia, string>> = {
  [CategoryMedia.AIRING_TODAY]: "Airing Today",
  [CategoryMedia.ON_THE_AIR]: "On Air in the next 7 days.",
  [CategoryMedia.POPULAR]: "Popular",
  [CategoryMedia.TOP_RATED]: "Top Rated",
};
