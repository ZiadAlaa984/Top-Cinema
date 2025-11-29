import Box from "@/Shared/Box";
import { ResponseApiTv } from "@/types/tv";

function Recommendations({
  data,
  type,
  id,
}: {
  data: ResponseApiTv;
  type: string;
  id: string;
}) {
  return <Box type={type} data={data?.results} title="Recommendations" />;
}

export default Recommendations;
