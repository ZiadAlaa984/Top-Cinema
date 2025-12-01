import { ImageForWrapper } from "@/lib/utils";
import Service from "@/service/All";
import Wrapper from "@/Shared/Wrapper";
import { logos, translation, video } from "@/types/movie";
import TabsDetails from "../TabsDetails";
import Details from "../Details";

async function MainContent({
  number,
  id,
  type,
}: {
  number: string;
  id: string;
  type: string;
}) {
  // Fetch all data in parallel
  const [details, recommendations, translations, providers, logos, videos] =
    await Promise.all([
      Service.getDetailsSeason(number, id),
      Service.getRecommendations(type, id),
      Service.translate(type, id),
      Service.providers(type, id),
      Service.logos(type, id),
      Service.videos(type, id),
    ]);

  const arabicTranslation = translations.translations.find(
    (t: translation) => t.iso_639_1 === "ar"
  );

  const providerList = providers?.results?.US?.buy;

  const selectedLogo = logos?.logos.find((logo: logos) => logo.file_path);

  const selectedVideo = videos?.results.find((video: video) => video.key);

  return (
    <Wrapper>
      <Details
        seasonName={details.name}
        name={details.name}
        logo={selectedLogo}
        video={selectedVideo}
        providers={providerList}
        translationArabic={arabicTranslation}
        data={details}
        type={type}
        id={id}
      />

      {/* <TabsDetails
        id={id}
        seasons={type == "tv" ? details?.seasons : null}
        Crews={details.crew}
        recommendations={recommendations}
        type={type}
      /> */}
    </Wrapper>
  );
}

export default MainContent;
