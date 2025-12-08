import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { cn, ImageSrs } from "@/lib/utils";
import SpecialTitle from "@/Shared/SpecialTitle";
import { castResponse } from "@/types/crew";
import Image from "next/image";
import Link from "next/link";

function CrewsBox({ data, type }: { data: castResponse; type: string }) {
  return (
    <div className={cn("Content-Wrapper card-used ")}>
      <SpecialTitle title={"Crews"} />
      <Separator className="my-4" />
      <ScrollArea className="rounded-md border">
        <div className="grid grid-flow-col auto-cols-[200px] gap-2 p-2">
          {data.cast.map(
            (cast, index) =>
              cast?.profile_path && (
                <Link
                  key={index}
                  className=" firstChild "
                  href={`/celebrities/${cast.id}`}
                >
                  <Image
                    width={300}
                    height={200}
                    className="object-cover  border-2 rounded-xl   w-full  h-[240px] border-green    glass  "
                    alt={cast.name}
                    src={ImageSrs(cast.profile_path)}
                  />
                  <h5 className="line-clamp-1  text-white text-center">
                    {cast.name.split(" ").slice(0, 3).join(" ")}
                  </h5>
                </Link>
              )
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default CrewsBox;
