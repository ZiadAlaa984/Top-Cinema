import GridHome from "@/components/Pages/Home/GridHome";
import SliderHome from "@/components/Pages/Home/SliderHome";
import Service from "@/service/All";
import Box from "@/Shared/Box";
import { ResponseApiTv } from "@/types/tv";

export default async function MainContent() {
  const kinds = ["now_playing", "popular", "top_rated", "upcoming"] as const;

  // 1) Trending TV (slider)
  const trendingTv: ResponseApiTv = await Service.getTrending("tv", "week", 1);

  // 2) Fetch all movie kinds
  const movieResponses = await Promise.all(
    kinds.map((kind) => Service.getData("movie", kind, 1))
  );

  const [nowPlaying, popular, topRated, upcoming] = movieResponses;

  return (
    <main className="flex flex-col gap-6">
      {/* Slider */}
      <SliderHome data={trendingTv?.results} />

      {/* Example using new movie data */}
      <GridHome
        dataSmall={nowPlaying?.results}
        dataBig={popular?.results}
        titleGridSmall="Now Playing"
        pageGridSmall="./movie/now_playing"
        pageGridBig="./movie/popular"
        titleGridBig="Popular Movies"
      />

      <GridHome
        order={1}
        dataSmall={topRated?.results}
        dataBig={upcoming?.results}
        titleGridSmall="Top Rated"
        pageGridSmall="./movie/top_rated"
        pageGridBig="./movie/upcoming"
        titleGridBig="Upcoming Movies"
      />

      {/* BOX sections using trending TV */}
      <Box
        data={popular?.results}
        title="What's Popular in Movies"
        page="./movie/popular"
      />

      <Box data={topRated?.results} title="Netflix Series" page="./netflix" />

      <Box data={trendingTv?.results} title="Best TV Series This Month" />
    </main>
  );
}
