import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Recommendations from "./Recommendations";
import { castResponse } from "@/types/crew";
import CrewsBox from "./CrewsBox";
import { ResponseApiTv, seoson } from "@/types/tv";
import SeosonsBox from "./SeosonsBox";

export const title = "Basic Tabs";

const TabsDetails = ({
  recommendations,
  type,
  Crews,
  seosons,
}: {
  recommendations: ResponseApiTv;
  type: string;
  Crews: castResponse;
  seosons: seoson[] | undefined;
}) => {
  // Determine which tab should be selected first
  const defaultTab =
    recommendations?.results?.length > 0
      ? "recommendations"
      : type === "tv" && seosons
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
        {type === "tv" && seosons && (
          <TabsTrigger value="seosons">Seosons</TabsTrigger>
        )}
        {Crews && <TabsTrigger value="crews">Crews</TabsTrigger>}
      </TabsList>

      <TabsContent value="recommendations">
        <Recommendations data={recommendations} type={type} />
      </TabsContent>

      <TabsContent value="crews">
        <CrewsBox data={Crews} type={type} />
      </TabsContent>

      <TabsContent value="seosons">
        <SeosonsBox data={seosons} />
      </TabsContent>
    </Tabs>
  );
};

export default TabsDetails;
