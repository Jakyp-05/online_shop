import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar/index";
import Header from "../header";

const Layout = () => {
  return (
    <div className="admin-container">
      <section className="layout">
        <Sidebar />
        <div className="layout__header">
          <Header />
          <div className="layout__content">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
