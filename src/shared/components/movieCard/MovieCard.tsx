interface MovieCardProps {
  id?: number;
  name: string;
  imagePath: string;
}



export function MovieCard({ name, imagePath }: MovieCardProps) {
  return (
    <>
      <figure className="max-w-64 max-h-36 shadow-xl hover:scale-105 ease-in-out duration-300">
        <MovieCardBase name={name} imagePath={imagePath}></MovieCardBase>
      </figure>
    </>
  );
}

export function MoviePosterCard({ name, imagePath }: MovieCardProps) {
  return (
    <>
      <figure className="w-64 h-36 shadow-xl hover:scale-105 ease-in-out duration-300">
        <MovieCardBase name={name} imagePath={imagePath}></MovieCardBase>
      </figure>
    </>
  );
}

  function MovieCardBase({ name, imagePath }: MovieCardProps) {
    return (
      <>
        <img
          className="w-64 h-full rounded-xl"
          src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/w300${imagePath}`}
          alt={name}
          loading="lazy"
        />
      </>
    );
  }

