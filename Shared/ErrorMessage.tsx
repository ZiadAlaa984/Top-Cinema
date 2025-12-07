import React from "react";
import { cn } from "@/lib/utils";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <p className={cn("text-destructive text-[0.8rem]")}>{children}</p>
    </div>
  );
};

export default ErrorMessage;
