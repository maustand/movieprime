import { SerieDetails } from "@/core/models/series";
import MediaOverView from "@/shared/components/media-overview/mediaOverview";
import OnLoading from "@/shared/components/onLoading/OnLoading";
import seriesServices from "@core/services/api/series.service";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

export default function ShowSerie() {
  const { serieId } = useParams();
  const [serie, setSerie] = useState<SerieDetails>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (serieId) {
      seriesServices
        .show(+serieId)
        .then((serie) => {
          setSerie(serie);
        })
        .finally(() => setIsLoading(false));
    }
  }, [serieId]);

  return (
    <>
      {isLoading ? (
        <OnLoading type="spinner" size="lg" />
      ) : !serie?.id ? (
        <div className="h-full flex items-center justify-center">
          <h1 className="text-4xl">Serie NOT FOUND</h1>
        </div>
      ) : (
        <>
          <div className="flex max-w-4xl mx-auto p-4">
            <h1 className="text-slate-100 text-2xl">Serie</h1>

            <Link  className="btn btn-ghost p-2 focus:outline-none ml-auto" to={"../"}>
            <ArrowUturnLeftIcon className="size-6" />
            </Link>
          </div>

          <MediaOverView
            id={serie.id}
            name={serie.name}
            posterPath={serie.poster_path}
            releaseDate={serie.first_air_date}
            overview={serie.overview}
            rating={serie.vote_average}
            genres={serie.genres?.map((i) => i.name)}
          />
        </>
      )}
    </>
  );
}
