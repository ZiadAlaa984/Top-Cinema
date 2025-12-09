import GridHome from "@/components/Pages/Home/GridHome";
import SliderHome from "@/components/Pages/Home/SliderHome";
import { ImageForWrapper } from "@/lib/utils";
import Service from "@/service/All";
import Box from "@/Shared/Box";
import Wrapper from "@/Shared/Wrapper";
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

  // 2) Pick random kind + random image from fetched data
  const randomKindIndex = Math.floor(Math.random() * movieResponses.length);
  const selectedMovies = movieResponses[randomKindIndex]?.results ?? [];

  const randomImage = ImageForWrapper(selectedMovies);

  return (
    <Wrapper image={randomImage}>
      {/* Slider */}
      <div className="Content-Wrapper">
        <SliderHome data={trendingTv?.results} />
      </div>

      {/* Example using new movie data */}
      <GridHome
        dataSmall={nowPlaying?.results}
        dataBig={popular?.results}
        titleGridSmall="Now Playing"
        pageGridSmall="./movie/category/now_playing"
        pageGridBig="./movie/category/popular"
        titleGridBig="Popular Movies"
      />

      <GridHome
        order={"order-1"}
        dataSmall={topRated?.results}
        dataBig={upcoming?.results}
        titleGridSmall="Top Rated"
        pageGridSmall="./movie/category/top_rated"
        pageGridBig="./movie/category/upcoming"
        titleGridBig="Upcoming Movies"
      />

      {/* BOX sections using trending TV */}
      <Box
        data={popular?.results}
        title="What's Popular in Movies"
        page="./tv/category/popular"
      />

      <Box
        data={topRated?.results}
        title="Top Rated Movies"
        page="./movie/category/top_rated"
      />

      <Box data={trendingTv?.results} title="Trending Series This Month" />
    </Wrapper>
  );
}
