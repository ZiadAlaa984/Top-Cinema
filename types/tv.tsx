import { Crew } from "./crew";

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
  seasons: seasons[];
}
export interface seasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
export interface SeasonDetails {
  air_date: string;
  episodes: Episode[];
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  season_number: number;
  vote_average: number;
  _id: string;
}
export interface Episode {
  air_date: string;
  crew: Crew[];
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string | null;
  vote_average: number;
  vote_count: number;
}
