import { useRoutes } from "react-router-dom";
import Layout from "../components/layout/Layout";
import useRoute from "../hooks/useRoute";

// Route
import HomePage from "../pages/HomePage";

const MyRoutes = () => {
  const { Catalog, NotFound, ErrorBoundary, ProductId } = useRoute();
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
          element: ProductId
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
