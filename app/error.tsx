"use client";

import { Button } from "@/components/ui/button";
import FuzzyText from "@/components/ui/FuzzyText";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <FuzzyText baseIntensity={0.2}>404</FuzzyText>
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
}
