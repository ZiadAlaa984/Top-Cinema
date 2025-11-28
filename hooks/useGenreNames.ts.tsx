"use client";

import { useGenres } from "@/context/genresContext";

export function useGenreNames(type: "tv" | "movie", genreIds: number[]) {
  const { tvGenres, movieGenres } = useGenres();

  if (!genreIds) return [];

  if (type === "tv") {
    return genreIds
      .map((id) => tvGenres?.find((g) => g.id === id)?.name)
      .filter(Boolean);
  }

  return genreIds
    .map((id) => movieGenres?.find((g) => g.id === id)?.name)
    .filter(Boolean);
}
