export interface TMDBQueryParams {
  language?: string;
  page?: number;
  region?: string;
}

export interface TMDBPagination {
  page: number;
  total_pages: number;
  total_results: number;
}

export interface TMDBResponseBase<T> extends TMDBPagination {
  results: Array<T>;
}

export type TMDBResponse<T> = Promise<TMDBResponse<T>>;
