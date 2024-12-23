import { TMDBResponse } from "@/core/models/tmdb";
import { useCallback, useEffect, useRef, useState } from "react";

export function usePaginationMediaItems<T>(
  fetchEntityListFn: (page: number) => TMDBResponse<T>
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mediaList, setMediaList] = useState<Array<T>>([]);
  const paginationRef = useRef({ currentPage: 0, totalPages: 0 });

  const fetchList = useCallback(
    async (page: number) => {
      try {
        setIsLoading(true);
        const data = await fetchEntityListFn(page);
        setMediaList((prev) => {
          const list = page === 1 ? data.results : [...prev, ...data.results];
          return list;
        });
        paginationRef.current = {
          currentPage: page,
          totalPages: data.total_pages,
        };
      } catch (error) {
        console.error("Error loading movies:", error);
      } finally {
        setIsLoading(false);
      }
    },
    [fetchEntityListFn]
  );

  const fetchNextPage = useCallback(() => {
    const { currentPage, totalPages } = paginationRef.current;
    if (currentPage < totalPages && !isLoading) {
      fetchList(currentPage + 1);
    }
  }, [fetchList, isLoading]);

  useEffect(() => {
    fetchList(1);
  }, [fetchList]);

  return { isLoading, mediaList, fetchNextPage };
}
