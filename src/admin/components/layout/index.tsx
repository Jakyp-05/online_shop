import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/index";
import Header from "../header";

const Layout = () => {
  return (
    <div className="admin-container">
      <Header />
      <section className="layout">
        <Sidebar />
        <div className="layout__content">
          <Outlet />
        </div>
      </section>
    </div>
  );
};

export default Layout;
