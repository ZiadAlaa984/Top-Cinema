import { Button } from "@/components/ui/button";
import Image from "next/image";
import { movieType } from "@/types/movie";
import Link from "next/link";
import FavBtn from "./FavBtn";

export default function ImageDetails({
  data,
  video,
}: {
  data: movieType | undefined;
  video: string | undefined;
}) {
  return (
    <div className="col-span-1  col-end-5 items-start">
      <div className="    card-used  flex flex-col gap-3 ">
        <Image
          alt={data?.title || "unknown"}
          width={300}
          height={400}
          className="w-full md:min-h-[350px] bg-cover rounded-3xl"
          src={
            data?.poster_path
              ? process.env.NEXT_PUBLIC_IMAGE_SIZE_W500 + data.poster_path
              : "/placeholder.png"
          }
        />
        <Link href={`https://www.youtube.com/watch?v=${video}`}>
          <Button className="w-full">Watch Trailer</Button>
        </Link>
        <FavBtn />
      </div>
    </div>
  );
}
