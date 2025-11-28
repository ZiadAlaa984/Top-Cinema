import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { headers } from "@/constant";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
const BASE_URL = process.env.NEXT_PUBLIC_URL;

export const query = async (endpoint: string, params?: Record<string, any>) => {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });
  }

  const res = await fetch(url.toString(), { headers });
  return res.json();
};

export const ImageSrs = (src: string) =>
  process.env.NEXT_PUBLIC_IMAGE_SIZE_W500 + src;
