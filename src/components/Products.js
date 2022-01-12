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
  return (
    <div className="product">
      <h1>Products</h1>
      <ul className="product-ul">
        {state.map((data) => (
          <li className="product-li">
            <img src={data.image} alt="" className="product-image" />
            <p>{data.title}</p>
            <p>{data.price} $</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
