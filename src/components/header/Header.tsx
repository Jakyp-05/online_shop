import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [active, setActive] = useState<boolean>(false);

  const toggleSearch = () => {
    setActive((prev) => !prev);
  };

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
            <div className="header__search">
              <button
                className={`btn ${active ? "active" : ""}`}
                onClick={toggleSearch}
              >
                search
              </button>
            </div>
            <div className="header__search">
              <button className="btn">Cart: (1)</button>
            </div>
          </div>
        </div>
        <div className={`container collapsibles ${active ? "active" : ""}`}>
          <div className="callback-search">
            <input type="text" placeholder="Search..." />
            <img src="" alt="" />
            <button className="btn">Go!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
