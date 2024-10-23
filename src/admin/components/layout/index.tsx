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
          <div className="layout__result">
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
