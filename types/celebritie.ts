// TypeScript interfaces for the TMDB-like person search response
// Added `Popular` interface as requested.
// Generated from the example you provided.

import { tvType } from "./tv";

export interface celebritieResponse {
  page: number;
  results: celebritieType[];
}

export interface celebritieType {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for: KnownFor[];
  known_for_department: string;
  name: string;
  popularity?: number;
  profile_path: string;
}

export interface KnownFor {
  adult?: boolean;
  backdrop_path?: string | null;
  genre_ids?: number[];
  id: number;
  media_type: string;
  original_language?: string;
  original_title: string;
  original_name?: string;
  overview?: string;
  poster_path?: string | null;
  vote_average: number;
  vote_count?: number;
}

export interface celebritieDetails {
  profile_path: string;
  biography: string;
  name: string;
  birthday: string;
  also_known_as: string[];
  known_for_department: string;
}
export interface CombinedCreditsInterface {
  cast: tvType[];
}
