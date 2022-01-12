import React, { useEffect, useState } from "react";

const Products = () => {
  const [state, setstate] = useState([]);
  const [filter, setfilter] = useState([]);
  const [loading, setloading] = useState(false);
  console.log(state);
  const filterinf = (data) => {
    setloading(true);
    const Updatefilter = state.filter((x) => x.category === data);
    setfilter(Updatefilter);
  };

  useEffect(() => {
    const req = async () => {
      // setloading(false)
      await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => {
          setstate(data);
        });
    };
    req();
  }, []);
  console.log(state);

  return (
    <div className="product">
      <div className="main">
        <button className="btn" onClick={() => setloading(false)}>
          All
        </button>
        <button className="btn" onClick={() => filterinf("jewelery")}>
          jewerly
        </button>
        <button className="btn" onClick={() => filterinf("men's clothing")}>
          men's clothing
        </button>
        <button className="btn" onClick={() => filterinf("electronics")}>
          electronics
        </button>
        <button className="btn" onClick={() => filterinf("women's clothing")}>
          women's clothing
        </button>
      </div>
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
              <p>{data.price}$</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Products;
