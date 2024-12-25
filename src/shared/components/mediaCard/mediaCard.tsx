import { Link } from "react-router";

interface MediaCardProps {
  id?: number;
  title?: string;
  imagePath: string;
  detailsRoutePrefix?: string;
  style?: "small" | "large";
}

export function MediaCard({
  id,
  title,
  imagePath,
  detailsRoutePrefix,
}: MediaCardProps) {
  return (
    <>
      <Link
        className="w-fit block"
        to={detailsRoutePrefix ? `${detailsRoutePrefix}/${id}` : "#"}
      >
        <img
          className="rounded-xl hover:scale-105 ease-in-out duration-300"
          src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/w200${imagePath}`}
          alt={title}
          loading="lazy"
        />
      </Link>
    </>
  );
}
