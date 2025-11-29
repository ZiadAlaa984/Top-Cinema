import MainContent from "@/components/Pages/Details/MainContent";
import React from "react";

async function page({ params }: { params: { id: string; type: string } }) {
  const { id, type } = await params;
  return <MainContent key={"details Movie "} id={id} type={type} />;
}

export default page;
