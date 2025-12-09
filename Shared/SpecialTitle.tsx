import BlurText from "@/components/ui/BlurText";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/top.png";
function SpecialTitle({ page, title }: { page?: string; title: string }) {
  return (
    <div className="flex justify-between  items-center ">
      <h2 className="flex items-center gap-2">
        <Image
          src={logo}
          className="size-10 object-contain"
          alt="top cinema"
          width={100}
          height={100}
        />
        <BlurText
          text={title.split("_").join(" ")}
          delay={150}
          animateBy="words"
          direction="top"
          className={`text-xl capitalize `}
        />
      </h2>
      {page && (
        <Link href={page}>
          {" "}
          <Button>View more</Button>
        </Link>
      )}
    </div>
  );
}

export default SpecialTitle;
