import React, { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/nav-logo.webp";
import {VscMenu, VscClose} from "react-icons/vsc"
import {FiLogOut} from "react-icons/fi"

const Nav = ({ onSearch, logOut, randomChar }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }
 
  useEffect(() => {
    if (location.pathname !== "/") {
      setMenuOpen(false)
    }
  }, [location.pathname])

  return (
    <nav className="nav">
      <NavLink to="/home">
        <img className="nav__logo" src={logo} alt="logo rick and morty" />
      </NavLink>


      <SearchBar onSearch={onSearch} randomChar={randomChar} />

      <ul className={`nav__links ${menuOpen ? "activeNav" : ""}`}>
        <NavLink className="nav__link" to="/home">
          <li>Home</li>
        </NavLink>

        <NavLink className="nav__link" to="/about">
          <li>About</li>
        </NavLink>

        <NavLink className="nav__link" to="/favorites">
          <li>Favorites</li>
        </NavLink>

        <li onClick={logOut} className="nav__link"><FiLogOut /></li>
      </ul>

      <div className="bar">
        <i onClick={handleMenu}>{menuOpen ? <VscClose /> : <VscMenu/> }</i>
      </div>

    </nav>
  );
};

export default Nav;
