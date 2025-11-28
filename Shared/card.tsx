"use client";
import { useGenreNames } from "@/hooks/useGenreNames.ts";
import { ImageSrs } from "@/lib/utils";
import { tvType } from "@/types/tv";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Card({ card }: { card: tvType }) {
  const genreNames = useGenreNames("tv", card.genre_ids);
  return (
    <div className="col-span-1 relative min-h-[300px] hover:bg-black/60 transform transition-all  rounded-md">
      <Image
        width={300}
        height={200}
        src={ImageSrs(card.poster_path)}
        alt={Card.name}
        className="w-full absolute h-full rounded-xl object-cover"
      />
      <div className="absolute top-0 p-2.5 flex flex-col ">
        <ul className="flex items-center flex-wrap gap-1">
          {genreNames.map((genre) => (
            <li
              key={genre}
              className="tag bg-yellow-400 text-black font-semibold px-2 py-1 rounded"
            >
              {genre}
            </li>
          ))}
        </ul>
        <span className="flex items-center gap-1 text-xs tag">
          {card.vote_average.toFixed(1)}{" "}
          <Star absoluteStrokeWidth className="text-yellow-400 size-4" />
        </span>
      </div>
      <h3 className=" title line-clamp-2">{card.name}</h3>
    </div>
  );
}
