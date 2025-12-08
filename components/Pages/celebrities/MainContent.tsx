"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Service from "@/service/All";
import RequestStatus from "@/Shared/RequestStatus";
import SpecialTitle from "@/Shared/SpecialTitle";
import Wrapper from "@/Shared/Wrapper";
import { Loader2 } from "lucide-react";
import { celebritieResponse } from "@/types/celebritie";
import CelebritieCard from "@/Shared/CelebritieCard";
import { useInView } from "react-intersection-observer";
import BeforeAfterBtns from "@/Shared/BeforeAfterBtns";

export default function MainContent() {
  const { ref, inView } = useInView();

  const {
    data,
    isLoading,
    isError,
    isPending,
    error,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["celebrities"],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      Service.getCelebrities(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: any) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined; // no more pages
    },
    staleTime: 1000 * 60 * 5,
  });
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Wrapper className="flex flex-col  gap-4">
      <BeforeAfterBtns />
      <div className={cn("Content-Wrapper card-used")}>
        <SpecialTitle title={"celebrities"} />
        <Separator className="my-4" />

        {/* 1) Main content */}
        <RequestStatus
          isLoading={isLoading}
          isPending={isPending}
          data={data?.pages ?? []}
          isError={isError}
          error={error ?? new Error("Unknown error")}
        >
          <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-2 ">
            {data?.pages
              ?.flatMap((page: celebritieResponse) => page.results)
              .map((Celebritie, index) => {
                if (Celebritie?.profile_path) {
                  return (
                    <CelebritieCard
                      key={index}
                      card={Celebritie}
                      className="hover:scale-105 transition-transform"
                    />
                  );
                }
              })}
          </div>
        </RequestStatus>

        {/* 2) Loader for next page */}
        <div ref={ref} className="w-full flex justify-center py-6">
          {isFetchingNextPage && (
            <Loader2 className="animate-spin h-8 w-8 text-white" />
          )}
        </div>
      </div>
    </Wrapper>
  );
}
