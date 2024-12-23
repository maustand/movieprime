import { TMDBResponse } from "@/core/models/tmdb";
import { usePaginationMediaItems } from "@/shared/hooks/usePaginationMediaItems/usePaginationMediaItems";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import OnLoading from "../onLoading/OnLoading";
import { MediaCard } from "../mediaCard/mediaCard";

interface MediaCarouselProps<T> {
  id: string;
  fetchMediaListFn: (page: number) => TMDBResponse<T>;
  headerText: string;
}

interface MediaItem {
  id: number;
  title?: string;
  poster_path: string;
  name?: string;
}

export default function MediaCarousel<T extends MediaItem>({
  fetchMediaListFn,
  headerText,
  id,
}: MediaCarouselProps<T>) {
  const { isLoading, mediaList, fetchNextPage } =
    usePaginationMediaItems<T>(fetchMediaListFn);

  return (
    <>
      <h2 className="text-slate-100 mb-4 text-lg">{headerText}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={3}
        slidesPerView={5.2}
        navigation
        onReachEnd={fetchNextPage}
      >
        {mediaList.map((item: T, indx) => (
          <SwiperSlide tabIndex={indx} key={`slide-${id}-${indx}`}>
            <MediaCard
              id={item?.id}
              title={item?.title || item.name}
              imagePath={item.poster_path}
            />
          </SwiperSlide>
        ))}

        {isLoading ? (
          <SwiperSlide>
            <OnLoading type="ring" size="lg" />
          </SwiperSlide>
        ) : null}
      </Swiper>
    </>
  );
}
