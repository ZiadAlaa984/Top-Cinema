import { cn, ImageSrs } from "@/lib/utils";
import { seoson } from "@/types/tv";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import SpecialTitle from "@/Shared/SpecialTitle";
import Image from "next/image";
import { Star } from "lucide-react";

function SeosonsBox({ data }: { data: seoson[] | undefined }) {
  return (
    <div className={cn("Content-Wrapper card-used ")}>
      <SpecialTitle title={"seosons"} />
      <Separator className="my-4" />
      <ScrollArea className="rounded-md border">
        <div className="grid grid-flow-col auto-cols-[200px] gap-2 p-2">
          {data?.map((card) => (
            <div
              className={cn(
                "col-span-1 relative min-h-[300px] overflow-hidden hover:bg-black/60 transform transition-all  rounded-md"
              )}
            >
              <Image
                width={300}
                height={200}
                src={ImageSrs(card.poster_path)}
                alt={card.name}
                className="w-full absolute h-full rounded-xl object-cover"
              />
              <div className="absolute top-0 p-2.5 flex flex-col ">
                <ul className="flex items-center flex-wrap gap-1">
                  <li className="tag bg-yellow-400 text-black font-semibold px-2 py-1 rounded">
                    Seoson : {card.season_number}
                  </li>
                </ul>
                <span className="flex items-center gap-1 text-xs tag">
                  {card.air_date}
                </span>
              </div>
              <h3 className=" title line-clamp-1 rounded-b-xl">{card?.name}</h3>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default SeosonsBox;
