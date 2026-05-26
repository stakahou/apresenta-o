import DefaultLayout from "@/layouts/DefaultLayout";
import HomePage from "@/pages/Home";
import SmartExploration from "@/pages/SmartExploration";
import type { FC } from "react";
import { useRoutes } from "react-router-dom";

const AppRoutes: FC = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <DefaultLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
          handle: {
            breadcrumb: "Home",
          },
        },
        {
          path: "smart-exploration",
          element: <SmartExploration />,
          handle: {
            breadcrumb: "Exploração Inteligente",
          },
        },
      ],
    },
    {
      path: "*",
      element: <h1>404 Not Found</h1>,
    },
  ]);

  return routes;
};

export default AppRoutes;
