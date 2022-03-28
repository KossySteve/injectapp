import React from "react";
import Logo from "../../assets/logo/InStock-Logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

function Header() {
  const wearhouseButtonClass = classNames("header__button", {
    "header__button--active": window.location.pathname.includes("/warehouses"),
  });
  const inventoryButtonClass = classNames("header__button", {
    "header__button--active": window.location.pathname.includes("/inventory"),
  });
  return (
    <section className="header">
      <Link to="/warehouses">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>
      <div className="header__container">
        <Link to="/warehouses" className={wearhouseButtonClass}>
          Warehouses
        </Link>
        <Link to="/inventory" className={inventoryButtonClass}>
          Inventory
        </Link>
      </div>
    </section>
  );
}

export default Header;
