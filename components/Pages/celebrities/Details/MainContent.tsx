import Info from "./Info";
import Wrapper from "@/Shared/Wrapper";
import Acting from "./Acting";
import Service from "@/service/All";
import {
  celebritieDetails,
  CombinedCreditsInterface,
} from "@/types/celebritie";
import Box from "@/Shared/Box";

async function MainContent({ id }: { id: string }) {
  const Response: celebritieDetails = await Service.getDetailsCelebrities(id);
  const CombinedCreditsResponse: CombinedCreditsInterface =
    await Service.getCombinedCredits(id);
  return (
    <Wrapper className="flex flex-col Content-Wrapper gap-4">
      <Info data={Response} />
      <Box title="Known For" data={CombinedCreditsResponse?.cast} />
      <Acting />
    </Wrapper>
  );
}

export default MainContent;
