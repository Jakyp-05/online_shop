import { jsx as _jsx } from "react/jsx-runtime";
import Layout from "../components/layout";
import { routesData } from "../data/routesData";
import useRouters from "../hooks/useRouters";
const adminRoutes = () => {
    const { ErrorBoundary } = useRouters();
    return [
        {
            path: "/admin",
            element: _jsx(Layout, {}),
            errorElement: ErrorBoundary,
            children: routesData.map(({ path, element }) => ({
                path,
                element,
            })),
        },
    ];
};
export default adminRoutes;
