import { celebritieType } from "./celebritie";
import { tvType } from "./tv";

export interface ResponseApiMovie {
  page: number;
  results: movieType[];
  total_pages: number;
  total_results: number;
}
export interface ResponseApiSearch {
  page: number;
  results: movieType[] | tvType[] | celebritieType[];
  total_pages: number;
  total_results: number;
}

export interface movieType {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  };
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  origin_country: string[];
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface kindType {
  kind: "now_playing" | "popular" | "top_rated" | "upcoming";
}
export interface GenresResponse {
  genres: Genre[];
}
export interface Genre {
  id: number;
  name: string;
}

export interface translationResponseType {
  id: number;
  translations: translation[];
}
export interface translation {
  iso_639_1: string;
  data: {
    overview: string;
  };
}
export interface ProviderResposeType {
  id: number;
  results: {
    US: {
      buy: buyType[];
    };
  };
}

export interface buyType {
  provider_id: number;
  logo_path: string;
  provider_name: string;
}

export interface LogosResposeType {
  logos: logos[];
}
export interface logos {
  file_path: string;
}
export interface videosResponseType {
  id: number;
  results: video[];
}

export interface video {
  key: string;
}
