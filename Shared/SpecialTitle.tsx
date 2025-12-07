import BlurText from "@/components/ui/BlurText";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function SpecialTitle({ page, title }: { page?: string; title: string }) {
  return (
    <div className="flex justify-between  items-center ">
      <h2>
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
