import Loadle from "../../loadable/Loadle";

const useRoutes = () => {
  const AdminHomePage = Loadle({
    factory: () => import("../pages/AdminHomePage"),
  });
  const AdminProductsPage = Loadle({
    factory: () => import("../pages/AdminProductsPage"),
  });
  const AdminProfilePage = Loadle({
    factory: () => import("../pages/AdminProfilePage"),
  });
  return { AdminHomePage, AdminProductsPage, AdminProfilePage };
};

export default useRoutes;
