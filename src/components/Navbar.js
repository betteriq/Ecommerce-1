import React from "react";

const Navbar = () => {
  return (
    <nav className="nav-main">
      <h1>Rashidi Shop</h1>
      <div className="nav-third">
        <a href="/" className="atn">Home </a>
        <a href="/" className="atn">Products </a>
        <a href="/" className="atn">About</a>
        <a href="/" className="atn">Contact</a>
      </div>
      <div className="nav-second">
        <button className="btn">Login</button>
        <button className="btn">Cart</button>
      </div>
    </nav>
  );
};

export default Navbar;
