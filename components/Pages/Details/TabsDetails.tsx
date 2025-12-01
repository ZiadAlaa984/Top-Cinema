import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Recommendations from "./Recommendations";
import { castResponse } from "@/types/crew";
import CrewsBox from "./CrewsBox";
import { ResponseApiTv, seasons } from "@/types/tv";
import SeasonsBox from "./SeasonsBox";

export const title = "Basic Tabs";

const TabsDetails = ({
  recommendations,
  id,
  type,
  Crews,
  seasons,
}: {
  id: string;
  recommendations: ResponseApiTv;
  type: string;
  Crews: castResponse;
  seasons: seasons[] | undefined;
}) => {
  // Determine which tab should be selected first
  const defaultTab =
    recommendations?.results?.length > 0
      ? "recommendations"
      : type === "tv" && seasons
      ? "seosons"
      : Crews
      ? "crews"
      : "recommendations"; // fallback

  return (
    <Tabs className="" defaultValue={defaultTab}>
      <TabsList className="Content-Wrapper flex ">
        {recommendations?.results?.length > 0 && (
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        )}
        {type === "tv" && seasons && (
          <TabsTrigger value="seasons">Seosons</TabsTrigger>
        )}
        {Crews && <TabsTrigger value="crews">Crews</TabsTrigger>}
      </TabsList>

      <TabsContent value="recommendations">
        <Recommendations data={recommendations} type={type} />
      </TabsContent>

      <TabsContent value="crews">
        <CrewsBox data={Crews} type={type} />
      </TabsContent>

      <TabsContent value="seasons">
        <SeasonsBox id={id} data={seasons} />
      </TabsContent>
    </Tabs>
  );
};

export default TabsDetails;
