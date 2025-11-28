export interface ResponseApiTv {
  page: number;
  results: tvType[];
}

export interface tvType {
  name: string;
  id: string;
  backdrop_path: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  media_type: string;
  first_air_date: string;
  genre_ids: number[];
}
