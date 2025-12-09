import MainContent from "@/components/Pages/Details/MainContent";
import { generateMovieMetadata } from "@/lib/metadata";
import Service from "@/service/All";
import React from "react";
export async function generateMetadata({
  params,
}: {
  params: { id: string; type: string };
}) {
  const { id, type } = await params;
  const details = await Service.getDetails(type, id);
  return generateMovieMetadata(details);
}

async function page({ params }: { params: { id: string; type: string } }) {
  const { id, type } = await params;
  return <MainContent key={`details ${type} `} id={id} type={type} />;
}

export default page;
