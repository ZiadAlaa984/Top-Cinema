import MainContent from "@/components/Pages/Details/Season/MainContent";

async function page({ params }: { params: { id: string; number: string } }) {
  const { id, number } = await params;
  return (
    <MainContent type={"tv"} key={"details Season "} id={id} number={number} />
  );
}

export default page;
