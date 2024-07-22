import React, { useContext } from "react";
import "./Navbar.css";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, isLoggedIn, logout } = useContext(StoreContext);
  const location = useLocation();
  const isHomePge = location.pathname==="/" || location.pathname==="/home";
  if(!isHomePge){
    return null;
  }

  


  return (
    <div className="navbar fixed top-0 left-0 w-full p-4 bg-white z-10 h-28">
      <Link to="/">
        {" "}
        <img src="./images/Shoe logo.png" alt="Logo" className="logo" />{" "}
      </Link>
      <ul className="navbar-menu flex justify-center items-center">
        <li
          className={`nav-item ${menu === "home" ? "active" : ""}`}
          onClick={() => setMenu("home")}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className={`nav-item ${menu === "Men" ? "active" : ""}`}>
          <Link to="/men" className="nav-link" onClick={() => setMenu("Men")}>
            Men
          </Link>
        </li>
        <li className={`nav-item ${menu === "Women" ? "active" : ""}`}>
          <Link
            to="/women"
            className="nav-link"
            onClick={() => setMenu("Women")}
          >
            Women
          </Link>
        </li>
      </ul>
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/Cart">
            {" "}
            <img src="./images/basket_icon.png" alt="cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <Link to="login">
          <button onClick={() => logout()}>
            {" "}
            {isLoggedIn ? "Log out" : "Log in"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
