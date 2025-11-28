import { Button } from "@/components/ui/button";
import FuzzyText from "@/components/ui/FuzzyText";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center gap-4">
      <FuzzyText baseIntensity={0.2}>404</FuzzyText>
      <Link href="/" className="capitalize">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
}
