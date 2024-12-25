import { MovieDetails } from "@/core/models/movies";
import MediaOverView from "@/shared/components/media-overview/mediaOverview";
import OnLoading from "@/shared/components/onLoading/OnLoading";
import moviesService from "@core/services/api/movies.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function ShowMovie() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState<MovieDetails>();
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

        <MediaOverView id={movie.id}  
        name={movie.title} posterPath={movie.poster_path} releaseDate={movie.release_date} 
        overview={movie.overview}
        rating={movie.vote_average}
        genres={movie.genres?.map((i) => i.name)}
        />
      )}
    </>
  );
}
