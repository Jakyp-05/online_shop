import { RouteObject } from "react-router-dom";
import Layout from "../components/layout";
import { routesData } from "../../data/routesData";
import useRouters from "../hooks/useRouters";

const adminRoutes = (): RouteObject[] => {
  const { ErrorBoundary } = useRouters();
  return [
    {
      path: "/admin",
      element: <Layout />,
      errorElement: ErrorBoundary,
      children: routesData.map(({ path, element }) => ({
        path,
        element,
      })),
    },
  ];
};

export default adminRoutes;
