import Loadle from "../../loadable/Loadle";

const useRoutes = () => {
  const AdminHomePage = Loadle({
    factory: () => import("../pages/AdminHomePage"),
  });
  const AdminProductsPage = Loadle({
    factory: () => import("../pages/AdminProductsPage"),
  });
  const AdminSettinsPage = Loadle({
    factory: () => import("../pages/AdminSettinsPage"),
  });
  return { AdminHomePage, AdminProductsPage, AdminSettinsPage };
};

export default useRoutes;
