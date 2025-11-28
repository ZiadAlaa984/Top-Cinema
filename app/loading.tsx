"use client";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/animations/loading.json";

export default function Loading() {
  return (
    <div className="w-full overflow-hidden bg-black fixed  z-1000000  min-h-screen   flex items-center justify-center">
      <Lottie animationData={loadingAnimation} loop={true} />
    </div>
  );
}
