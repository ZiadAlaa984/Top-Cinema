export interface ResponseApiTv {
  page: number;
  results: tvType[];
}

export interface tvType {
  name: string;
  title: string;
  id: string;
  backdrop_path: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  media_type: string;
  first_air_date: string;
  genre_ids: number[];
  seasons: seoson[];
}
export interface seoson {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
