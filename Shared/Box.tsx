import { Button } from "@/components/ui/button";
import Card from "./card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { tvType } from "@/types/tv";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import BlurText from "@/components/ui/BlurText";
import { Separator } from "@/components/ui/separator";
import SpecialTitle from "./SpecialTitle";

export default function Box({
  title,
  data,
  page,
  type = "movie",
  className,
}: {
  type?: string;
  className?: string;
  title: string;
  data: tvType[];
  page?: string;
}) {
  return (
    <div className={cn("Content-Wrapper card-used ", className)}>
      <SpecialTitle page={page} title={title} />
      <Separator className="my-4" />
      <ScrollArea className="rounded-md border">
        <div className="grid grid-flow-col auto-cols-[200px] gap-2 p-2">
          {data.map((card) => (
            <Card type={type} card={card} key={card.id} />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
