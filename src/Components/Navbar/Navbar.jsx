import React, { useContext, useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import Search from "../search/Search";

const Navbar = () => {
  // console.log(PRODUCTS);
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmount, isLoggedIn, logout,setFilteredProducts,filteredProducts,products} = useContext(StoreContext);
  const location = useLocation();
  const isHomePge = location.pathname === "/" || location.pathname === "/home";


 const handleSearch = (value) => {
  const searchProducts=products.filter((item)=>{
    return item.productdescription.toLowerCase().includes(value.toLowerCase())
  })
   setFilteredProducts(searchProducts)
 };


  if (!isHomePge) {
    return null;
  }

  return (
    <div className="navbar fixed top-0 left-0 w-full p-4 bg-white z-10 h-28 size-2 pl-24">
      <Link to="/">
        <img src="./images/Shoe logo.png" alt="Logo" className="logo" />
      </Link>
      <ul className="navbar-menu flex  items-center pl-10 justify-between">
        <li
          className={`nav-item ${menu === "home" ? "active" : ""}`}
          onClick={() => setMenu("home")}
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li
          className={`nav-item ${menu === "Men" ? "active" : ""}`}
          onClick={() => setMenu("Men")}
        >
          <Link to="/men" className="nav-link">
            Men
          </Link>
        </li>
        <li
          className={`nav-item ${menu === "Women" ? "active" : ""}`}
          onClick={() => setMenu("Women")}
        >
          <Link to="/women" className="nav-link">
            Women
          </Link>
        </li>
      </ul>
      <Search onSearch={handleSearch} />
      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to="/Cart">
            <img src="./images/basket_icon.png" alt="cart" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        <Link to="login">
          <button onClick={() => logout()}>
            {isLoggedIn ? "Log out" : "Log in"}
          </button>
        </Link>
      </div>

      
    </div>
  );
};

export default Navbar;
