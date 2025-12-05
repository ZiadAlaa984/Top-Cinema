import type { Metadata } from "next";

export function generateMovieMetadata(movie: any): Metadata {
  return {
    title: movie.title || movie.name,
    description: movie.overview,
    openGraph: {
      title: movie.title || movie.name,
      description: movie.overview,
      images: [`https://image.tmdb.org/t/p/w500${movie.poster_path}`],
    },
    twitter: {
      title: movie.title,
      description: movie.overview,
    },
  };
}
