import React from "react";
import { Link } from "react-router-dom";

import { SidebarData } from "../../data/sidebar";

const Sidebar: React.FC = () => {
  return (
    <section className="sidebar">
      <Link to={"/admin/home"}>Logo</Link>
      <ul className="sidebar__menu">
        {SidebarData.map((el) => (
          <li key={el.id}>
            <Link to={el.menuLink}>{el.menuText}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sidebar;
