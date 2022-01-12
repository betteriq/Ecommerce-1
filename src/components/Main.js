import React, { useState } from "react";
import Products from "./Products";

const Main = () => {
  const [filter, setfilter] = useState([]);
  const [loading, setloading] = useState(false);
  return (
    <main>
      <h1>Last Products</h1>
      <div className="line">
        <hr />
      </div>
      <button> one</button>
      <Products filter={filter} setfilter={setfilter} loading={loading} setloading={setloading}/>
    </main>
  );
};

export default Main;
