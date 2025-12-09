import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Card from "@/Shared/card";
import SideCard from "@/Shared/sideCard";
import SpecialTitle from "@/Shared/SpecialTitle";
import { movieType } from "@/types/movie";
import { tvType } from "@/types/tv";

function GridHome({
  pageGridSmall,
  pageGridBig,
  titleGridBig,
  titleGridSmall,
  dataBig,
  type = "movie",
  dataSmall,
  order,
}: {
  type?: string;
  order?: string;
  dataBig: tvType[];
  dataSmall: tvType[];
  titleGridSmall: string;
  pageGridSmall: string;
  pageGridBig: string;
  titleGridBig: string;
}) {
  return (
    <div className="grid Content-Wrapper gap-4  grid-cols-3">
      <div className={`col-span-3 lg:col-span-2  ${order ?? ""} card-used `}>
        <SpecialTitle page={pageGridBig} title={titleGridBig} />
        <Separator className="my-4" />
        <ScrollArea className="rounded-md border">
          <div className="grid grid-flow-col auto-cols-[200px] gap-2 p-2">
            {dataBig.map((card) => (
              <Card type={type} card={card} key={card.id} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
      <div className="col-span-3 lg:col-span-1  card-used">
        {" "}
        <SpecialTitle page={pageGridSmall} title={titleGridSmall} />
        <Separator className="my-4" />
        <ScrollArea className="rounded-md  border">
          <div className="flex flex-col   max-h-[316px] gap-2 p-2">
            {dataSmall.map((card, index) => (
              <SideCard type={type} card={card} key={index} />
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </div>
  );
}

export default GridHome;
