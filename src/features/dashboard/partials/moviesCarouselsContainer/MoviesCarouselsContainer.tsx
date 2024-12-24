import MediaCarousel from "@/shared/components/mediaCarousel/MediaCarousel";
import moviesService from "@core/services/api/movies.service";
import seriesService from "@core/services/api/series.service";

export default function MoviesCarouselsContainer() {
  return (
    <>
      <div className="space-y-12">
        <section>
          <MediaCarousel
            mediaDetailsRoutePrefix="/movies"
            fetchMediaListFn={(page: number) =>
              moviesService.getPopular({ page })
            }
            headerText="Movies - Popular"
            id="moviesnowplaying"
          />
        </section>

        <section>
          <MediaCarousel
            fetchMediaListFn={(page: number) =>
              seriesService.getPopular({ page })
            }
            headerText="Series - Popular"
            id="seriespopular"
            mediaDetailsRoutePrefix="/movies"
          />
        </section>
      </div>
    </>
  );
}
