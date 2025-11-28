import { ImageSrs } from "@/lib/utils";
import { tvType } from "@/types/tv";
import Image from "next/image";

export default function SideCard({ card }: { card: tvType }) {
  return (
    <div className="flex items-center gap-1">
      <div className="Poster">
        <Image
          width={300}
          height={200}
          src={ImageSrs(card.poster_path)}
          alt={card.name}
          className="w-full object-cover h-full"
        />
      </div>
      <h3 className="  text-xs  line-clamp-2">{card.name}</h3>
    </div>
  );
}
