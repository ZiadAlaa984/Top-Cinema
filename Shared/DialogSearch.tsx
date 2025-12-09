"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useDebounce } from "use-debounce";
import { Search } from "lucide-react";
import RequestStatus from "./RequestStatus";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { tvType } from "@/types/tv";
import { celebritieType } from "@/types/celebritie";
import { useQuery } from "@tanstack/react-query";
import Service from "@/service/All";
import Card from "./card";
import CelebritieCard from "./CelebritieCard";
import { ResponseApiSearch } from "@/types/movie";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type FilterType = "movie" | "tv" | "person";

export function DialogSearch() {
  const [filter, setFilter] = useState<FilterType>("movie");
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounce(inputValue, 1000);
  const [isOpen, setIsOpen] = useState(false);

  const { data, isLoading, isError, error, isPending } = useQuery({
    queryKey: ["search", filter, debouncedValue],
    queryFn: () => Service.getDataBySearch(filter, debouncedValue),
    enabled: debouncedValue.length > 0,
  });

  const handleCardClick = () => {
    setIsOpen(false);
  };

  const renderCards = () => {
    if (!data?.results) return null;

    return data.results.map((card: tvType | celebritieType, index: number) => {
      const imagePath =
        (card as tvType).poster_path || (card as celebritieType).profile_path;

      if (!imagePath) return null;

      // Celebrity
      if (filter === "person") {
        return (
          <div key={index} onClick={handleCardClick}>
            <CelebritieCard
              card={card as celebritieType}
              className="hover:scale-105 transition-transform cursor-pointer"
            />
          </div>
        );
      }

      // Movie/TV
      return (
        <div key={index} onClick={handleCardClick}>
          <Card type={filter} card={card as tvType} />
        </div>
      );
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Search className="cursor-pointer" size={26} />
      </DialogTrigger>
      {/* This is the overlay */}
      <DialogContent className="z-200">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
          <DialogDescription>
            Search for movies, TV shows, or people by name
          </DialogDescription>
        </DialogHeader>

        <div className="grid gap-4">
          <div className="flex items-center gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Search in top cinema"
            />
            <Select
              onValueChange={(value) => setFilter(value as FilterType)}
              defaultValue={filter}
            >
              <SelectTrigger>
                <SelectValue placeholder="Filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Filter by</SelectLabel>
                  <SelectItem value="movie">Movie</SelectItem>
                  <SelectItem value="tv">TV</SelectItem>
                  <SelectItem value="person">Celebrity</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <RequestStatus
          isLoading={isLoading}
          isPending={isPending}
          data={data?.results}
          isError={isError}
          error={error ?? new Error("Unknown error")}
        >
          <ScrollArea className="rounded-md border  h-[400px] ">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-2 ">
              {renderCards()}
            </div>
            <ScrollBar orientation="vertical" />
          </ScrollArea>
        </RequestStatus>

        <DialogFooter>
          <DialogClose asChild>
            <Button>Cancel</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
