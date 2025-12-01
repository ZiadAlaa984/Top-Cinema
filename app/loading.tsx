"use client";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/animations/loading.json";

export default function Loading() {
  return (
    <div className=" w-full col-span-6 overflow-hidden   z-1000000  min-h-[400px] flex items-center justify-center">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
}
