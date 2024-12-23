interface MediaCardProps {
  id?: number;
  title?: string;
  imagePath: string;
}

export function MediaCard({ title, imagePath }: MediaCardProps) {
  return (
    <>
      <figure className="shadow-xl hover:scale-105 ease-in-out duration-300">
        <MediaBaseCard title={title} imagePath={imagePath}></MediaBaseCard>
      </figure>
    </>
  );
}

export function MediaPosterCard({ title, imagePath }: MediaCardProps) {
  return (
    <>
      <figure className="shadow-xl hover:scale-105 ease-in-out duration-300">
        <MediaBaseCard title={title} imagePath={imagePath}></MediaBaseCard>
      </figure>
    </>
  );
}

function MediaBaseCard({ title, imagePath }: MediaCardProps) {
  return (
    <>
      <img
        className="rounded-xl"
        src={`${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}/w200${imagePath}`}
        alt={title}
        loading="lazy"
      />
    </>
  );
}
