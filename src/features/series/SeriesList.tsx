import { CategoryMedia } from "@/core/models/media";
import { CategorySerieTitles, Serie } from "@/core/models/series";
import seriesService from "@/core/services/api/series.service";
import { MediaCard } from "@/shared/components/mediaCard/mediaCard";
import OnLoading from "@/shared/components/onLoading/OnLoading";

import { usePaginationMediaItems } from "@/shared/hooks/usePaginationMediaItems/usePaginationMediaItems";
import { useCallback, useState } from "react";

export default function SeriesList() {
  const [categorySerie, setCategorySerie] = useState<CategoryMedia>(
    CategoryMedia.POPULAR
  );

  const fetchFunction = useCallback(
    (page: number) => {
      switch (categorySerie) {
        case CategoryMedia.AIRING_TODAY:
          return seriesService.getAiringToday({ page });
        case CategoryMedia.ON_THE_AIR:
          return seriesService.getOnTheAir({ page });
        case CategoryMedia.TOP_RATED:
          return seriesService.getTopRated({ page });
        default:
          return seriesService.getPopular({ page });
      }
    },
    [categorySerie]
  );

  const { isLoading, mediaList } = usePaginationMediaItems(fetchFunction);

  function onCategoryChange(category: CategoryMedia) {
    setCategorySerie(category);
  }

  return (
    <>
      <div className="space-y-12 overflow-auto">
        <h1 className="text-slate-100 text-2xl">Series</h1>

        <div className="flex justify-end">
          <select
            className="select select-bordered w-full max-w-xs"
            value={categorySerie}
            onChange={(e) => onCategoryChange(e.target.value as CategoryMedia)}
          >
            {Object.entries(CategorySerieTitles).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
        </div>

        {isLoading ? (
          <div className="flex justify-center">
            <OnLoading type="ring" size="lg" />
          </div>
        ) : null}
        
        <div className="grid grid-cols-6 gap-6">
          {mediaList.map((item: Serie, indx) => (
            <MediaCard
              key={indx}
              id={item.id}
              title={item.name}
              imagePath={item.poster_path}
              detailsRoutePrefix={"/series"}
            />
          ))}
        </div>
      </div>
    </>
  );
}
