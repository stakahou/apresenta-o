import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

const breadcrumbMap: Record<string, string> = {
  "/": "Home",
  "/smart-exploration": "Exploração Inteligente",
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const paths = location.pathname.split("/").filter(Boolean);

  let currentPath = "";

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink render={<Link to="/">Home</Link>} />
        </BreadcrumbItem>

        {paths.map((path, index) => {
          currentPath += `/${path}`;
          const isLast = index === paths.length - 1;

          return (
            <Fragment key={currentPath}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage>{breadcrumbMap[currentPath]}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    render={
                      <Link to={currentPath}>{breadcrumbMap[currentPath]}</Link>
                    }
                  />
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
