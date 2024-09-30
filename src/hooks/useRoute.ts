import Loadle from "../ui/loadable/Loadle";

const useRoutes = () => {
  const Catalog = Loadle({ factory: () => import("../pages/Catalog") });
  const NotFound = Loadle({ factory: () => import("../pages/NotFound") });
  const ErrorBoundary = Loadle({
    factory: () => import("../ui/fallback/ErrorBoundary"),
  });
  return {Catalog, NotFound, ErrorBoundary };
};

export default useRoutes;
