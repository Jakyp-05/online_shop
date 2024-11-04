import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__menu-first">
          <Link to="/">Logo</Link>
          <nav className="menu">
            <ul className="menu__list">
              <li className="menu__item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu__item">
                <Link to="/catalog">Catalog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="header__actions">
          <div className="header__cart">
            <Link to="/basket">My Cart: (1)</Link>
          </div>
          <div className="header__login">
            <Link to="/login">Login</Link>
          </div>
          <div className="header__login">
            <Link to="/Register">Register</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
