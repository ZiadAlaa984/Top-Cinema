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
      className="w-full mb-10 "
    >
      <CarouselContent>
        {data.map((card, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 pl-2 md:basis-1/3  lg:basis-1/5 "
          >
            <Card
              type="tv"
              className=" md:min-h-[350px]"
              card={card}
              key={card.id}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="top-full backdrop-blur-md mt-2 left-1/2 -translate-x-[150%] translate-y-0 sm:-translate-x-[180%] md:-translate-x-[130%]" />

      <CarouselNext className="top-full mt-2 backdrop-blur-md  left-1/2 translate-x-[50%] translate-y-0 sm:translate-x-[70%] md:translate-x-[40%]" />
    </Carousel>
  );
}
