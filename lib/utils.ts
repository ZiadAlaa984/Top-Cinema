import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { headers } from "@/constant";
import { movieType } from "@/types/movie";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const query = async (endpoint: string, params?: Record<string, any>) => {
  if (!BASE_URL) throw new Error("Missing NEXT_PUBLIC_URL");

  const url = new URL(`${BASE_URL}/${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value != null) url.searchParams.append(key, String(value));
    });
  }

  const res = await fetch(url.toString(), { headers, cache: "force-cache" });

  if (!res.ok) {
    const errorBody = await res.text().catch(() => "");
    throw new Error(errorBody || `Request failed with status ${res.status}`);
  }

  return res.json();
};

export const ImageSrs = (src: string) =>
  process.env.NEXT_PUBLIC_IMAGE_SIZE_W500 + src;
// get  image for Wrapper url

export const ImageForWrapper = (data: movieType[]) => {
  while (true) {
    if (data.length === 0) return "";
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomMovie = data[randomIndex];
    if (randomMovie.backdrop_path) {
      return `${process.env.NEXT_PUBLIC_IMAGE_SIZE_NORMAL}${randomMovie.backdrop_path}`;
    }
  }
};
