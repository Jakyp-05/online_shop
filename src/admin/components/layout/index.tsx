import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/index";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
