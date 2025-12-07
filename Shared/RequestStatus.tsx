"use client";
import React from "react";

import Loading from "@/app/loading";
import { cn } from "@/lib/utils";
import ErrorMessage from "./ErrorMessage";
import NoDataCom from "./NoDataCom";

const RequestStatus = ({
  isLoading,
  isError,
  isPending,
  error,
  data,
  children,
}: {
  isLoading: boolean;
  isError: boolean;
  error: Error;
  data: unknown[];
  children: React.ReactNode;
  isPending: boolean;
}) => {
  if (isLoading)
    return (
      <div className="h-[200px] w-full flex items-center justify-center">
        <Loading />
      </div>
    );

  if (isError)
    return (
      <div>
        <ErrorMessage>{error?.message}</ErrorMessage>
      </div>
    );

  if (Array.isArray(data) && data.length === 0)
    return (
      <div>
        <NoDataCom />
      </div>
    );

  if (!Array.isArray(data)) return null;

  return (
    <div
      className={cn({
        "opacity-50": isPending,
      })}
    >
      {children}
    </div>
  );
};

export default RequestStatus;
