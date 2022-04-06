import React from "react";
import Logo from "../../assets/logo/inJECT.png";
import "./Header.scss";
import { Link } from "react-router-dom";


function Header() {
 
  return (
    <section className="header">
      <Link to="/">
        <img className="header__logo" src={Logo} alt="logo" />
      </Link>
      <div className="header__container">
        <Link to="/" className='header__button'>
          Find Jobs
        </Link>
        <Link to="/dashboard/postjob" className='header__button'>
          Post Jobs
        </Link>
        <Link to="/dashboard/jobsbyyou" className='header__button'>
          Jobs By You
        </Link>
        <Link to="/aboutus" className='header__button'>
          About
        </Link>
      </div>
   
    </section>
  );
}

export default Header;
