import { ImageForWrapper } from "@/lib/utils";
import Service from "@/service/All";
import Wrapper from "@/Shared/Wrapper";
import Recommendations from "./Recommendations";
import { logos, translation, video } from "@/types/movie";
import Details from "./Details";

async function MainContent({ type, id }: { type: string; id: string }) {
  // Fetch all data in parallel
  let name = "";
  const [
    details,
    crew,
    recommendations,
    translations,
    providers,
    logos,
    videos,
  ] = await Promise.all([
    Service.getDetails(type, id),
    Service.getCrew(type, id),
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

  const imageWrapper = ImageForWrapper([details]);

  if (type == "tv") {
    name = details.name;
  } else {
    name = details.title;
  }

  return (
    <Wrapper image={imageWrapper}>
      <Details
        name={name}
        logo={selectedLogo}
        video={selectedVideo}
        providers={providerList}
        translationArabic={arabicTranslation}
        data={details}
        type={type}
        id={id}
      />
      {recommendations.total_results > 0 && (
        <Recommendations  data={recommendations} type={type} id={id} />
      )}
    </Wrapper>
  );
}

export default MainContent;
