import { Media } from "./media";

export interface Serie extends Media {
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
}