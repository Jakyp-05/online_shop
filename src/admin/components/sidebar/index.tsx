import React from "react";
import { Link, Outlet } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div>
      <div className="sidebar">
        <Link to={"/admin/home"}>Home</Link>
        <Link to={"/admin/products"}>Ptoducts</Link>
        <Link to={"/admin/profile"}>Profile</Link>
      </div>

      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
