import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import wishlist from "../assets/wishlist.png";
import cart from "../assets/cart.png";

function Header() {
  return (
    <>
      <header className="header">
        <Link className="header-logo-container" to="/">
          <img src={logo} className="logo" />
          <p className="logo-name">Digital Prints</p>
        </Link>

        <nav className="header-center-nav-container">
          <NavLink className="center-nav" to="/courses">Home</NavLink>
          <NavLink className="center-nav" to="/courses">Gallery</NavLink>
          <NavLink className="center-nav" to="/about">Blog</NavLink>
        </nav>

        <div className="header-end-nav-container">
          <Link className="nav-img-link" to="/">
            <img src={search} className="nav-img-search" />
          </Link>
          <Link className="nav-img-link" to="/">
            <img src={wishlist} className="nav-img-wishlist" />
          </Link>
          <Link className="nav-img-link" to="/">
            <img src={cart} className="nav-img-cart" />
          </Link>
        </div>
      </header>
    </>
  );
}

export default Header;
