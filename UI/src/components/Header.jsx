import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import wishlist from "../assets/wishlist.png";
import cart from "../assets/cart.png";

function Header() {
  return (
    <>
      <header>
        <div className="header-logo-container">
          <Link className="site-logo" to="/">
            <img src={logo} className="logo" />
            <p className="logo-name">Digital Prints</p>
          </Link>
        </div>

        <div className="header-center-nav-container">

          <nav className="nav">
            <NavLink to="/courses">Home</NavLink>
            <NavLink to="/courses">Gallery</NavLink>
            <NavLink to="/about">Blog</NavLink>
          </nav>

        </div>

        <div className="header-end-nav-container">

          <Link className="site-logo" to="/">
            <img src={search} className="logo" />
          </Link>
          <Link className="site-logo" to="/">
            <img src={wishlist} className="logo" />
          </Link>
          <Link className="site-logo" to="/">
            <img src={cart} className="logo" />
          </Link>

        </div>
      </header>
    </>
  );
}

export default Header;
