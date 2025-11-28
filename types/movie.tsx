export interface movieType {
  title: string;
  id: string;
  backdrop_path: string;
  vote_average: number;
  poster_path: string;
  overview: string;
  media_type: string;
  first_air_date: string;
  genre_ids: number[];
}
export interface ResponseApiMovie {
  page: number;
  results: movieType[];
}
