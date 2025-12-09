"use client";

import { useEffect, useState } from "react";
import Breadcrumbs from "@/components/breadcrumb";
import { CopyButton } from "@/components/ui/shadcn-io/copy-button";
import { ImageSrs } from "@/lib/utils";
import { buyType, movieType } from "@/types/movie";
import Image from "next/image";
import React from "react";

export default function Info({
  data,
  providers,
  overviewArabic,
  logo,
  type,
  name,
  seasonName,
}: {
  seasonName?: string;
  name: string;
  type: string;
  logo?: string;
  data: movieType;
  providers?: buyType[];
  overviewArabic?: string;
}) {
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUrl(window.location.href);
    }
  }, []);

  return (
    <div className="col-span-1 lg:col-span-2 flex flex-col gap-4">
      <Breadcrumbs
        seasonName={seasonName}
        type={type}
        title={name.split(" ").splice(0, 3).join(" ")}
      />

      {/* Poster Logo */}
      {logo && (
        <Image
          width={300}
          height={200}
          className="h-auto object-cover lg:w-[25%] w-[35%]"
          alt={name || "unknown"}
          src={process.env.NEXT_PUBLIC_IMAGE_SIZE_W500 + logo}
        />
      )}

      {/* Tagline */}
      {data?.tagline && <p className="glass text-xs">{data.tagline}</p>}

      {/* Genres */}
      {data?.genres && data?.genres?.length > 0 && (
        <ul className="flex flex-wrap items-center gap-2">
          {data.genres.map((genre) => (
            <li key={genre.id} className="glass text-xs">
              {genre.name}
            </li>
          ))}
        </ul>
      )}

      {/* Overview EN */}
      {data?.overview && <p className="glass text-sm">{data.overview}</p>}

      {/* Overview AR */}
      {overviewArabic && (
        <p className="glass text-sm text-right">{overviewArabic}</p>
      )}

      {/* Stats */}
      <ul className="flex flex-wrap items-center gap-2">
        {data?.status && (
          <li className="glass text-xs">Status : {data.status}</li>
        )}

        {data?.origin_country?.[0] && (
          <li className="glass text-xs">Country : {data.origin_country[0]}</li>
        )}

        {data?.original_language && (
          <li className="glass text-xs">
            Original language : {data.original_language}
          </li>
        )}
      </ul>

      {/* Providers */}
      {providers && providers.length > 0 && (
        <ul className="flex flex-wrap items-center gap-2">
          <li className="glass text-xs flex items-center gap-2">
            Buy:
            {providers.map((provider) =>
              provider.logo_path ? (
                <Image
                  key={provider.provider_id}
                  width={24}
                  height={24}
                  className="object-contain rounded-full size-6"
                  src={ImageSrs(provider.logo_path)}
                  alt={provider.provider_name}
                />
              ) : null
            )}
          </li>
        </ul>
      )}

      {/* Rating */}
      {data?.vote_average && data?.vote_average != 0 ? (
        <h2 className="glass">
          <span className="text-3xl font-bold">
            {data.vote_average.toFixed(1)}
          </span>{" "}
          /10
        </h2>
      ) : null}

      {/* Quick Link */}
      {url && (
        <li className="glass flex items-center gap-2 text-xs">
          Short link:{" "}
          <span className="tag bg-yellow-400 text-black font-semibold m-0 rounded">
            {url}
          </span>{" "}
          <CopyButton content={url} />
        </li>
      )}
    </div>
  );
}
