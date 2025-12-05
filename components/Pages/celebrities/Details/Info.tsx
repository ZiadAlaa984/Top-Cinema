import Breadcrumbs from "@/components/breadcrumb";
import { ImageSrs } from "@/lib/utils";
import { celebritieDetails } from "@/types/celebritie";
import Image from "next/image";

function Info({ data }: { data: celebritieDetails }) {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* info details */}
      <div className="col-span-2 flex flex-col gap-4">
        {/* Breadcrumbs */}
        <Breadcrumbs
          type={"Celebrities"}
          title={data?.name.split(" ").splice(0, 3).join(" ")}
        />
        <h1 className="text-4xl">{data?.name}</h1>
        {data?.biography && (
          <div className="space-y-2">
            <h2 className="glass ">Biography</h2>
            <p className="glass text-sm">{data.biography}</p>
          </div>
        )}
        <div className="flex flex-wrap items-center gap-2">
          {data?.birthday && (
            <p className="glass text-sm text-right">{data?.birthday}</p>
          )}
          {data?.known_for_department && (
            <p className="glass text-sm text-right">
              {data?.known_for_department}
            </p>
          )}
        </div>
        {data?.also_known_as && data?.also_known_as?.length > 0 && (
          <ul className="flex flex-wrap items-center gap-2">
            {data.also_known_as.map((known) => (
              <li key={known} className="glass text-xs">
                {known}
              </li>
            ))}
          </ul>
        )}
      </div>
      {/* image profile */}
      <div className="col-span-1  col-end-5 items-start">
        <div className="card-used  ">
          <Image
            alt={data?.name || "unknown"}
            width={300}
            height={400}
            className="w-full md:min-h-[350px] bg-cover rounded-3xl"
            src={ImageSrs(data?.profile_path)}
          />
        </div>
      </div>
    </div>
  );
}

export default Info;
