import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="admin-header">
      <div className="admin-header__first">
        <Link to={"/admin/home"}>Logo</Link>
        <div className="callback-form">Search</div>
      </div>
      <div className="profile">
        <img
          className="profile__image"
          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
          alt="profile image"
        />
        <span>emilys</span>
      </div>
    </header>
  );
};

export default Header;
