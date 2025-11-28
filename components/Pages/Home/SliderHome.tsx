import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "@/Shared/card";
import { tvType } from "@/types/tv";

export default function SliderHome({ data }: { data: tvType[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full Content-Wrapper"
    >
      <CarouselContent>
        {data.map((card, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 pl-2 md:basis-1/3  lg:basis-1/5 "
          >
            <Card className=" min-h-[350px]" card={card} key={card.id} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
