import MainContent from "@/components/Pages/celebrities/Details/MainContent";

async function page({ params }: { params: { id: string } }) {
  const { id } = await params;
  return <MainContent key={"details celebrities"} id={id} />;
}

export default page;
