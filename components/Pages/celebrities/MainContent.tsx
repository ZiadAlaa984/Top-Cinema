"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Service from "@/service/All";
import RequestStatus from "@/Shared/RequestStatus";
import SpecialTitle from "@/Shared/SpecialTitle";
import Wrapper from "@/Shared/Wrapper";
import { Loader2 } from "lucide-react";
import { celebritieResponse } from "@/types/celebritie";
import CelebritieCard from "@/Shared/CelebritieCard";

export default function MainContent() {
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Fetch + Infinite Scroll
  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
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

  // Intersection Observer to load next page when scrolling
  useEffect(() => {
    if (!loadMoreRef.current) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    observer.observe(loadMoreRef.current);

    return () => {
      observer.disconnect();
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <Wrapper className="flex flex-col component-wrapper gap-4">
      <div className={cn("Content-Wrapper card-used")}>
        <SpecialTitle title={"celebrities"} />
        <Separator className="my-4" />

        {/* 1) Main content */}
        <RequestStatus isloading={isLoading} isError={isError}>
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
        <div ref={loadMoreRef} className="w-full flex justify-center py-6">
          {isFetchingNextPage && (
            <Loader2 className="animate-spin h-8 w-8 text-white" />
          )}
        </div>
      </div>
    </Wrapper>
  );
}
