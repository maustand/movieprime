import { Movie } from "@/core/models/movies";
import moviesService from "@core/services/api/movies.service";
import { useEffect, useState } from "react";
import { MovieCard } from "@/shared/components/movieCard/MovieCard";

export default function MoviesCarouselsContainer() {
  const [moviesList, setMoviesList] = useState<Array<Movie>>([]);

  useEffect(() => {
    moviesService.getNowPlaying().then((response) => {
      console.log(response);
      setMoviesList(response.results);
    });
  }, []);

  return (
    <>
      <div className="grid gap-8 grid-cols-6">
        {moviesList.map((item: Movie) => (
          <MovieCard
            key={`movie-nowplaying${item.id}`}
            id={item.id}
            name={item.title}
            imagePath={item.poster_path}
          />
        ))}
      </div>
    </>
  );
}
