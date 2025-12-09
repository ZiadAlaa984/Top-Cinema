import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronsRight } from "lucide-react";

const Breadcrumbs = ({
  type,
  title,
  seasonName,
}: {
  type: string;
  seasonName?: string;
  title: string;
}) => {
  let link;
  if (type == "movie") {
    type = "movies";
    link = `movie/category/popular`;
  } else if (type == "tv") {
    link = `${type}/category/popular`;
  } else {
    link = `celebrities`;
  }
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbLink href={`/${link?.toLowerCase()}`}>
            {type}
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator>
          <ChevronsRight />
        </BreadcrumbSeparator>
        <BreadcrumbItem>
          <BreadcrumbPage>{title}</BreadcrumbPage>
        </BreadcrumbItem>
        {seasonName && (
          <>
            <BreadcrumbSeparator>
              <ChevronsRight />
            </BreadcrumbSeparator>
            <BreadcrumbItem className="cursor-pointer">
              <BreadcrumbLink href={`/${link?.toLowerCase()}`}>
                {seasonName}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </>
        )}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default Breadcrumbs;
