import React, { useState } from "react";
import Products from "./Products";

const Main = () => {
  return (
    <main>
      <h1>Last Products</h1>
      <div className="line">
        <hr />
      </div>
      <Products />
    </main>
  );
};

export default Main;
