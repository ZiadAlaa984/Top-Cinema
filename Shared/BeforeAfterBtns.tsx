"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function BeforeAfterBtns() {
  return (
    <div className="Content-Wrapper flex justify-between items-center ">
      <Button
        onClick={() => window.history.back()}
        variant={"outline"}
        className="hover:scale-110 transition"
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth={0}
          version="1.1"
          viewBox="0 0 17 17"
          className="text-2xl inline mb-1 mr-1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g />
          <path d="M6.719 8.474l7.281 6.097v-12.135l-7.281 6.038zM13 12.429l-4.719-3.951 4.719-3.914v7.865zM3.281 8.478l5.54 4.639-0.643 0.768-6.46-5.41 6.462-5.358 0.639 0.77-5.538 4.591z" />
        </svg>
        <span className="hidden lg:inline font-bold text-white uppercase">
          Back
        </span>
      </Button>
      <Link href={"/"}>
        <Button variant={"outline"} className="hover:scale-110 transition">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 576 512"
            className="text-2xl inline mb-1  "
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M543.8 287.6c17 0 32-14 32-32.1c1-9-3-17-11-24L309.5 7c-6-5-14-7-21-7s-15 1-22 8L10 231.5c-7 7-10 15-10 24c0 18 14 32.1 32 32.1h32V448c0 35.3 28.7 64 64 64H230.4l-31.3-52.2c-4.1-6.8-2.6-15.5 3.5-20.5L288 368l-60.2-82.8c-10.9-15 8.2-33.5 22.8-22l117.9 92.6c8 6.3 8.2 18.4 .4 24.9L288 448l38.4 64H448.5c35.5 0 64.2-28.8 64-64.3l-.7-160.2h32z" />
          </svg>

          <span className="hidden lg:inline font-bold text-white uppercase">
            Home
          </span>
        </Button>
      </Link>
    </div>
  );
}

export default BeforeAfterBtns;
