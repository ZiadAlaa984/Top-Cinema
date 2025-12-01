"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { cn, ImageForWrapper } from "@/lib/utils";
import Service from "@/service/All";
import Card from "@/Shared/card";
import RequestStatus from "@/Shared/RequestStatus";
import SpecialTitle from "@/Shared/SpecialTitle";
import Wrapper from "@/Shared/Wrapper";
import { tvType } from "@/types/tv";
import { Loader2 } from "lucide-react";

export default function MainContent({
  type,
  category,
}: {
  type: string;
  category: string;
}) {
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
    queryKey: [type, category],
    queryFn: ({ pageParam }: { pageParam: number }) =>
      Service.getData(type, category, pageParam),
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

  // Extract all results from pages
  const allResults = data?.pages.flatMap((p) => p.results) || [];

  const imageWrapper = ImageForWrapper(allResults);

  return (
    <Wrapper
      image={imageWrapper}
      className="flex flex-col component-wrapper gap-4"
    >
      <div className={cn("Content-Wrapper card-used")}>
        <SpecialTitle title={category} />
        <Separator className="my-4" />

        {/* 1) Main content */}
        <RequestStatus isloading={isLoading} isError={isError}>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-2 ">
            {allResults.map((card: tvType, index: number) => (
              <Card type={type} card={card} key={index} />
            ))}
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
