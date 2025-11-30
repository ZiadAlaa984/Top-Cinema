import Box from "@/Shared/Box";
import { ResponseApiTv } from "@/types/tv";

function Recommendations({
  data,
  type,
}: {
  data: ResponseApiTv;
  type: string;
}) {
  return <Box type={type} data={data?.results} title="Recommendations" />;
}

export default Recommendations;
