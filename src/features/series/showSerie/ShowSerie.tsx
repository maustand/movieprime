import { SerieDetails } from "@/core/models/series";
import MediaOverView from "@/shared/components/media-overview/mediaOverview";
import OnLoading from "@/shared/components/onLoading/OnLoading";
import seriesServices from "@core/services/api/series.service";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
        <MediaOverView
          id={serie.id}
          name={serie.name}
          posterPath={serie.poster_path}
          releaseDate={serie.first_air_date}
          overview={serie.overview}
          rating={serie.vote_average}
          genres={serie.genres?.map((i) => i.name)}
        />
      )}
    </>
  );
}
