import { useEffect, useState } from "react";
import { useParams } from "react-router";
import moviesService from "@core/services/api/movies.service";
import { Movie } from "@/core/models/movies";
import OnLoading from "@/shared/components/onLoading/OnLoading";

export default function ShowMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (movieId) {
      moviesService
        .show(+movieId)
        .then((movie) => {
          setMovie(movie);
        })
        .finally(() => setIsLoading(false));
    }
  }, [movieId]);

  return (
    <>
      {isLoading ? (
        <OnLoading type="spinner" size="lg" />
      ) : !movie?.id ? (
        <div className="h-full flex items-center justify-center">
          <h1 className="text-4xl">MOVIE NOT FOUND</h1>
        </div>
      ) : (
        <article>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </article>
      )}
    </>
  );
}
