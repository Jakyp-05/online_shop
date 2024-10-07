import Loadle from "../ui/loadable/Loadle";

const useRoutes = () => {
  const Catalog = Loadle({ factory: () => import("../pages/CatalogPage") });
  const NotFound = Loadle({ factory: () => import("../pages/NotFound") });
  const ErrorBoundary = Loadle({
    factory: () => import("../ui/fallback/ErrorBoundary"),
  });
  const ProductId = Loadle({
    factory: () => import("../components/productId"),
  });
  return { Catalog, NotFound, ErrorBoundary, ProductId };
};

export default useRoutes;
