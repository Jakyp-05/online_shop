import { useLocation, useRoutes } from "react-router-dom";
import adminRoutes from "./admin/routes/router";
import clientRoutes from "./client/router/routes";

const MyRoutes = () => {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  const routes = isAdminRoute ? adminRoutes() : clientRoutes();

  return useRoutes(routes);
};

export default MyRoutes;
