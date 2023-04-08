import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import logo from "../../assets/nav-logo.webp";

const Nav = ({ onSearch, logOut }) => {
  return (
    <nav className="nav">

      <Link to="/home">
      <img className="nav__logo" src={logo} alt="logo rick and morty" />
      </Link>

      <ul className="nav__links">
        <Link to="/home">
          <li className="nav__link">Home</li>
        </Link>
        <Link to="/about">
          <li className="nav__link">About</li>
        </Link>

      </ul>

      <SearchBar onSearch={onSearch} />

      <button className="nav__log-out" onClick={logOut}>Log Out</button>
 
    </nav>
  );
};

export default Nav;
