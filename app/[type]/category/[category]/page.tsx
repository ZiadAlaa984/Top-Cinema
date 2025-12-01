import MainContent from "@/components/Pages/Category/MainContent";

async function page({
  params,
}: {
  params: { type: string; category: string };
}) {
  const { type, category } = await params;
  return <MainContent type={type} category={category} />;
}

export default page;
