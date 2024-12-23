import { Media } from "./media";

export interface Movie extends Media {
  video: boolean;
  release_date: string;
  title: string;
  original_title: string;
}

export interface MovieDetails extends Movie {
  status: string;
  tagline: string;
}
