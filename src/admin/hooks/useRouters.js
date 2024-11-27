import Loadle from "@shared/ui/loadable/Loadle";
const useRouters = () => {
    const AdminHomePage = Loadle({
        factory: () => import("../pages/AdminHomePage"),
    });
    const AdminProductsPage = Loadle({
        factory: () => import("../pages/AdminProductsPage"),
    });
    const AdminSettinsPage = Loadle({
        factory: () => import("../pages/AdminSettinsPage"),
    });
    const ErrorBoundary = Loadle({
        factory: () => import("../../shared/ui/errorElement"),
    });
    return {
        AdminHomePage,
        AdminProductsPage,
        AdminSettinsPage,
        ErrorBoundary,
    };
};
export default useRouters;
