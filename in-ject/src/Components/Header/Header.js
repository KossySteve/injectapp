import React from "react";
import Logo from "../../assets/logo/inJECT.png";
import "./Header.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

function Header() {
 
  return (
    <section className="header">
      <Link to="/warehouses">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>
      <div className="header__container">
        <Link to="/" className='header__button'>
          Find Jobs
        </Link>
        <Link to="/postjob" className='header__button'>
          Post Jobs
        </Link>
        <Link to="/jobs" className='header__button'>
          All Jobs
        </Link>
        <Link to="/about" className='header__button'>
          About
        </Link>
      </div>
    </section>
  );
}

export default Header;
