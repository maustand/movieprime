import moviesService from "@/core/services/api/movies.service";
import MediaCarousel from "@/shared/components/mediaCarousel/MediaCarousel";

function MoviesList() {
  return (
    <>
      <div className="space-y-12 overflow-auto">
        <section>
          <MediaCarousel
            fetchMediaListFn={(page: number) =>
              moviesService.getNowPlaying({ page })
            }
            headerText="Now Playing"
            id="nowplaying"
          />
        </section>

        <section>
          <MediaCarousel
            fetchMediaListFn={(page: number) =>
              moviesService.getPopular({ page })
            }
            headerText="Popular"
            id="popular"
          />
        </section>

        <section>
          <MediaCarousel
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
