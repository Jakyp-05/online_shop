import Loadle from "../../shared/ui/loadable/Loadle";

const useRoutes = () => {
  const Catalog = Loadle({ factory: () => import("../pages/CatalogPage") });
  const NotFound = Loadle({ factory: () => import("../pages/NotFound") });
  const ErrorBoundary = Loadle({
    factory: () => import("../../shared/ui/errorElement"),
  });
  const ProductId = Loadle({
    factory: () => import("../components/productId"),
  });
  const LoginPage = Loadle({ factory: () => import("../pages/LoginPage") });
  const BasketPage = Loadle({ factory: () => import("../pages/BasketPage") });
  return { Catalog, NotFound, ErrorBoundary, ProductId, LoginPage, BasketPage };
};

export default useRoutes;
