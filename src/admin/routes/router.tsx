import { RouteObject } from "react-router-dom";
import Layout from "../components/layout";
import useRoutes from "../hooks/useRouters";

const adminRoutes = (): RouteObject[] => {
  const { AdminHomePage, AdminProductsPage, AdminSettinsPage } = useRoutes();
  return [
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin/home",
          element: AdminHomePage,
        },
        {
          path: "/admin/products",
          element: AdminProductsPage,
        },
        {
          path: "/admin/settins",
          element: AdminSettinsPage,
        },
      ],
    },
  ];
};

export default adminRoutes;
