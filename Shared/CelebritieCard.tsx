"use client";
import { cn, ImageSrs } from "@/lib/utils";
import { celebritieType } from "@/types/celebritie";
import Image from "next/image";
import Link from "next/link";

export default function CelebritieCard({
  card,
  className,
}: {
  card: celebritieType;
  className?: string;
}) {
  return (
    <Link href={`/celebritie/${card.id}`}>
      <div
        className={cn(
          "col-span-1 relative min-h-[300px] overflow-hidden hover:bg-black/60 transform transition-all  rounded-md",
          className
        )}
      >
        <Image
          width={300}
          height={200}
          src={ImageSrs(card?.profile_path)}
          alt={card?.name}
          className="w-full absolute h-full rounded-xl object-cover"
        />
        <div className="absolute top-0 p-2.5 flex flex-col ">
          <ul className="flex items-center flex-wrap gap-1">
            {card.known_for.map((known_for) => (
              <li
                key={known_for?.original_title}
                className="tag bg-yellow-400 text-black font-semibold px-2 py-1 rounded"
              >
                {known_for?.original_title?.split(" ").slice(0, 3).join(" ") ||
                  known_for?.original_name?.split(" ").slice(0, 3).join(" ")}
              </li>
            ))}
          </ul>
          <span className="flex items-center gap-1 text-xs tag">
            {card?.known_for_department}{" "}
          </span>
        </div>
        <h3 className=" title line-clamp-1 rounded-b-xl">{card?.name}</h3>
      </div>
    </Link>
  );
}
