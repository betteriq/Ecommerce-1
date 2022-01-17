import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Exportet } from "./AddtoCart/AddtoCart";


const Products = () => {
  const [state, setstate] = useState([]);
  const [filter, setfilter] = useState([]);
  const [loading, setloading] = useState(false);
  console.log(state);
  const stater = useSelector(state => state.jat)
  const dispatcher = useDispatch()
  const filterinf = (data) => {
    setloading(true);
    const Updatefilter = state.filter((x) => x.category === data);
    setfilter(Updatefilter);
  };

  // const showing = (a) => {};
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setstate(data);
        console.log("dataaaaaaaaaaaaa:", data);
        dispatcher(Exportet(data))
      });
  }, []);
  console.log(state);

  return (
    <div className="products">
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
      <ul className="products-ul">
        {!loading &&
          state.map((data) => (
            <li key={data.id} className="products-li">
              <img src={data.image} alt="" className="products-image" />
              <p>{data.title}</p>
              <p>{data.price} $</p>
              <button className="btn">
                <NavLink to={`/products/${data.id}`}>Buy Now</NavLink>
              </button>
            </li>
          ))}
        {loading &&
          filter.map((data) => (
            <li key={data.id} className="products-li">
              <img src={data.image} alt="" className="products-image" />
              <p>{data.title}</p>
              <p>{data.price}$</p>
              <button className="btn">Buy Now</button>
            </li>
          ))}
      </ul>
      <button onClick={()=>console.log("hi",stater)}>lllllllllllll</button>
    </div>
  );
};

export default Products;
