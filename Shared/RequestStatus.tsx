import Loading from "@/app/loading";
import React from "react";

interface RequestStatusProps {
  isPending?: boolean;
  isError?: boolean;
  children: React.ReactNode;
  isloading: boolean;
}

export default function RequestStatus({
  isPending,
  isError,
  children,
  isloading,
}: RequestStatusProps) {
  if (isloading || isPending) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-red-500">An error occurred. Please try again.</div>
    );
  }

  return <>{children}</>;
}
