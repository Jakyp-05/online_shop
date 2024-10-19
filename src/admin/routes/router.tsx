import { RouteObject } from "react-router-dom";
import Layout from "../components/layout";
import AdminHomePage from "../pages/AdminHomePage";
import AdminProductsPage from "../pages/AdminProductsPage";
import AdminProfilePage from "../pages/AdminProfilePage";

const adminRoutes = (): RouteObject[] => {
  return [
    {
      path: "/admin",
      element: <Layout />,
      children: [
        {
          path: "/admin/home",
          element: <AdminHomePage />,
        },
        {
          path: "/admin/products",
          element: <AdminProductsPage />,
        },
        {
          path: "/admin/profile",
          element: <AdminProfilePage />,
        },
      ],
    },
  ];
};

export default adminRoutes;
