import GridHome from "@/components/Pages/Home/GridHome";
import Service from "@/service/All";
import Box from "@/Shared/Box";
import { ResponseApiTv } from "@/types/tv";

export default async function Home() {
  // seperate
  // slider
  // fetch apis
  const Response: ResponseApiTv = await Service.getTrending("tv", "week", 1);

  return (
    <main className="flex flex-col gap-6">
      <GridHome
        dataSmall={Response?.results}
        dataBig={Response?.results}
        titleGridSmall={"NewlyAdded"}
        pageGridSmall="./NewlyAdded"
        pageGridBig="./NewlyAdded"
        titleGridBig={"NewlyAdded"}
      />
      <GridHome
        order={1}
        dataSmall={Response?.results}
        dataBig={Response?.results}
        titleGridSmall={"NewlyAdded"}
        pageGridSmall="./NewlyAdded"
        pageGridBig="./NewlyAdded"
        titleGridBig={"NewlyAdded"}
      />
      <Box
        data={Response?.results}
        key={"Newly added"}
        title="Newly added"
        page="./NewlyAdded"
      />
      <Box
        data={Response?.results}
        key={"Netflix series"}
        title="Netflix series"
        page="./netflix"
      />
      <Box
        data={Response?.results}
        key={"Best TV"}
        title="Best TV series this month"
      />
    </main>
  );
}
