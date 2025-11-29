import { buyType, logos, movieType, translation, video } from "@/types/movie";
import ImageDetails from "./ImageDetails";
import Info from "./info";

function Details({
  type,
  id,
  name,
  data,
  translationArabic,
  providers,
  logo,
  video,
}: {
  name: string;
  logo: logos | undefined;
  video: video | undefined;
  providers: buyType[] | undefined;
  translationArabic: translation | undefined;
  type: string;
  id: string;
  data: movieType;
}) {
  return (
    <div className="Content-Wrapper  grid grid-cols-1 lg:grid-cols-4 gap-4">
      <Info
        name={name}
        logo={logo?.file_path}
        providers={providers || undefined}
        data={data}
        type={type}
        overviewArabic={translationArabic?.data?.overview || undefined}
      />
      <ImageDetails video={video?.key} data={data} />
    </div>
  );
}

export default Details;

//  static
//
// add to fav components
