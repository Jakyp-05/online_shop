import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <div className="header">
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
            <div className="callback-search">
              <input type="text" placeholder="Search..." />
              <img src="" alt="" />
              <button className="btn">Go!</button>
            </div>
            <div className="header__cart">
              <button className="btn">My Cart: (1)</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
