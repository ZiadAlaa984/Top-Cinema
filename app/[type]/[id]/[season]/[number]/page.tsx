import MainContent from "@/components/Pages/Details/Season/MainContent";

async function page({
  params,
}: {
  params: { id: string; number: string; season: string };
}) {
  const { id, number, season } = await params;
  return (
    <MainContent
      type={"tv"}
      key={"details Season "}
      id={id}
      number={number}
      seasonName={season}
    />
  );
}

export default page;
