import moviesService from "@/core/services/api/movies.service";
import MediaCarousel from "@/shared/components/mediaCarousel/MediaCarousel";

function MoviesList() {
  return (
    <>
      <div className="space-y-12 overflow-auto">
        <h1 className="text-slate-100 text-2xl">Movies</h1>

        <section>
          <MediaCarousel
            mediaDetailsRoutePrefix="/movies"
            fetchMediaListFn={(page: number) =>
              moviesService.getNowPlaying({ page })
            }
            headerText="Now Playing"
            id="nowplaying"
          />
        </section>

        <section>
          <MediaCarousel
            mediaDetailsRoutePrefix="/movies"
            fetchMediaListFn={(page: number) =>
              moviesService.getPopular({ page })
            }
            headerText="Popular"
            id="popular"
          />
        </section>

        <section>
          <MediaCarousel
            mediaDetailsRoutePrefix="/movies"
            fetchMediaListFn={(page: number) =>
              moviesService.getUpcoming({ page })
            }
            headerText="Upcoming"
            id="upcoming"
          />
        </section>
      </div>
    </>
  );
}

export default MoviesList;
