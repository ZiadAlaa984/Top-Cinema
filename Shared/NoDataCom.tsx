import Lottie from "lottie-react";
import noDataAnim from "@/public/no_data.json";
import { cn } from "@/lib/utils";

const LottieAnimation = ({
  animationData,
  loop = true,
  autoplay = true,
  style,
}: {
  animationData: any;
  loop?: boolean;
  autoplay?: boolean;
  style: any;
}) => {
  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={style}
    />
  );
};

const NoDataCom = ({ text = "" }: { text?: string }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center mt-10">
      <LottieAnimation
        animationData={noDataAnim}
        style={{ width: 300, height: 300 }}
      />
      <p
        className={cn(
          "text-[0.8rem] text-muted-foreground mt-5",
          "text-center"
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default NoDataCom;
