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

export interface TMDBRangeDates {
  dates?: {
    maximum: string;
    minimum: string;
  };
}

interface TMDBResponseBase<T> extends TMDBPagination, TMDBRangeDates {
  results: Array<T>;
}

export type TMDBResponse<T> = Promise<TMDBResponseBase<T>>;
