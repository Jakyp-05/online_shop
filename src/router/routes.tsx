import { useRoutes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import useRoute from "../hooks/useRoute";

// Route
import HomePage from "../pages/HomePage";

const MyRoutes = () => {
  const { Catalog, NotFound, ErrorBoundary, ProductId, LoginPage } = useRoute();
  return useRoutes([
    {
      element: <Layout />,
      errorElement: ErrorBoundary,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/:id",
          element: ProductId,
        },
        {
          path: "/catalog",
          element: Catalog,
        },
        {
          path: "/catalog/:id",
          element: ProductId,
        },
        {
          path: "/catalog/categories/:category",
          element: Catalog,
        },
        {
          path: "/login",
          element: LoginPage,
        },
        {
          path: "*",
          element: NotFound,
        },
      ],
    },
  ]);
};

export default MyRoutes;
