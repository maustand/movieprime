interface MediaOverviewPros {
  id: number;
  name: string;
  posterPath: string;
  releaseDate: string;
  overview: string;
  rating: number;
  genres: string[]
}

export default function MediaOverView({
  name,
  posterPath,
  releaseDate,
  overview,
  rating,
  genres
}: MediaOverviewPros) {
  return (
    <>
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="w-full md:w-1/3">
            <img
              src={`${
                import.meta.env.VITE_TMDB_IMAGE_BASE_URL
              }/w300${posterPath}`}
              alt={`${name} poster`}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl font-bold text-white">{name}</h1>
            <p className="text-sm text-gray-500 mt-1">
              Release Date: {releaseDate}
            </p>

            <div className="flex gap-2 mt-4">
              {genres.map((genre, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>

            <div className="mt-4">
              <h2 className="text-xl font-semibold text-white">Overview</h2>
              <p className="mt-2">{overview || 'N/A'}</p>
            </div>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-500 text-xl">&#9733;</span>
              <span className="ml-2 text-lg font-semibold text-gray-700">
                {rating.toFixed(1)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
