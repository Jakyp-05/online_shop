import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../components/layout/Layout";
import useRoute from "../hooks/useRoute";
// Route
import HomePage from "../pages/HomePage";
const clientRoutes = () => {
    const { Catalog, NotFound, ErrorBoundary, ProductId, LoginPage, BasketPage, RegisterPage, ArrangePage, } = useRoute();
    return [
        {
            path: "/",
            element: _jsx(Layout, {}),
            errorElement: ErrorBoundary,
            children: [
                {
                    index: true,
                    element: _jsx(HomePage, {}),
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
                {
                    path: "/basket",
                    element: BasketPage,
                },
                {
                    path: "/register",
                    element: RegisterPage,
                },
                {
                    path: "/arrange",
                    element: ArrangePage,
                },
            ],
        },
    ];
};
export default clientRoutes;
