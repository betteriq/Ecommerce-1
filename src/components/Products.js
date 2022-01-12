import React, { useEffect, useState } from "react";

const Products = ({ setfilter, filter, loading, setloading }) => {
  const [state, setstate] = useState([]);

  useEffect(() => {
    const req = async () => {
      // setloading(false)
      await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          setstate(data);
        });
      console.log("req is.....", req);
    };
    req();
  }, []);
  console.log(state);

  const filterinf = (data) => {
    setloading(true);
    const Updatefilter = state.filter((x) => x.category === data);
    setfilter(Updatefilter);
  };
  return (
    <div className="product">
      <h1>Products</h1>
      <button onClick={() => setloading(false)}>All</button>
      <button onClick={() => filterinf("jewelery")}>jewerly</button>
      <button>Men</button>
      <button>women</button>{" "}
      <ul className="product-ul">
        {!loading &&
          state.map((data) => (
            <li className="product-li">
              <img src={data.image} alt="" className="product-image" />
              <p>{data.title}</p>
              <p>{data.price} $</p>
            </li>
          ))}
        {loading &&
          filter.map((data) => (
            <li className="product-li">
              <img src={data.image} alt="" className="product-image" />
              <p>{data.title}</p>
              <p>{data.price}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;
