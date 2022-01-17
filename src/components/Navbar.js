import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const data = useSelector((state) => state.numbers);
  return (
    <nav className="nav-main">
      <h1> Shop</h1>
      <div className="nav-third">
        <NavLink to="/home" className="atn">
          Home{" "}
        </NavLink>
        <NavLink to="/products" className="atn">
          Products{" "}
        </NavLink>
        <NavLink to="/about" className="atn">
          About
        </NavLink>
        <NavLink to="/contact" className="atn">
          Contact
        </NavLink>
      </div>
      <div className="nav-second">
        <button className="btn">Login</button>
        <button className="btn">Cart-{data}</button>
      </div>
    </nav>
  );
};

export default Navbar;
