import React, { useEffect, useState } from "react";

const Products = () => {
  const [state, setstate] = useState([]);
  useEffect(() => {
    const req = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          setstate(data);
        });
      console.log("req is.....", req);
    };
    req();
  }, []);
  console.log("state issssssssss........", state);
  return (
    <div>
      <h1>Products</h1>
      <ul className="product-ul">
        {state.map((data) => (
          <li>
            <h6>{data.title}</h6>
            <img src={data.image} alt="" className="product-image" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
