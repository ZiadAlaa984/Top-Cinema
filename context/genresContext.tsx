"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import Service from "@/service/All";

interface Genre {
  id: number;
  name: string;
}

interface GenresContextType {
  movieGenres: Genre[] | undefined;
  tvGenres: Genre[] | undefined;
  isLoading: boolean;
}

const GenresContext = createContext<GenresContextType | null>(null);

export function GenresProvider({ children }: { children: React.ReactNode }) {
  const { data: movieData, isLoading: isMovieLoading } = useQuery({
    queryKey: ["movieGenres"],
    queryFn: () => Service.getGenres("movie"),
  });

  const { data: tvData, isLoading: isTvLoading } = useQuery({
    queryKey: ["tvGenres"],
    queryFn: () => Service.getGenres("tv"),
  });

  return (
    <GenresContext.Provider
      value={{
        movieGenres: movieData?.genres,
        tvGenres: tvData?.genres,
        isLoading: isMovieLoading || isTvLoading,
      }}
    >
      {children}
    </GenresContext.Provider>
  );
}

export function useGenres() {
  const ctx = useContext(GenresContext);
  if (!ctx) {
    throw new Error("useGenres must be used inside GenresProvider");
  }
  return ctx;
}
