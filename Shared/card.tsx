"use client";
import { useGenreNames } from "@/hooks/useGenreNames.ts";
import { cn, ImageSrs } from "@/lib/utils";
import { movieType } from "@/types/movie";
import { tvType } from "@/types/tv";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Card({
  card,
  className,
  type,
}: {
  type: string;
  card: tvType;
  className?: string;
}) {
  const genreNames = useGenreNames(card?.media_type || "tv", card.genre_ids);
  return (
    <Link href={`/${card?.media_type || type}/${card.id}`}>
      <div
        className={cn(
          "col-span-1 relative min-h-[300px] overflow-hidden hover:bg-black/60 transform transition-all  rounded-md",
          className
        )}
      >
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
          {card.vote_average != 0 && (
            <span className="flex items-center gap-1 text-xs tag">
              {card.vote_average.toFixed(1)}{" "}
              <Star absoluteStrokeWidth className="text-yellow-400 size-4" />
            </span>
          )}
        </div>
        <h3 className=" title line-clamp-1 rounded-b-xl">
          {card?.name || card?.title}
        </h3>
      </div>
    </Link>
  );
}
