import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = (props) => {
  const [state, setstate] = useState();
  const [loading, setloading] = useState(false);
  console.log("prooooooooooooooooo");
  const { id } = useParams();
  useEffect(() => {
    console.log("ddddddddddddddd");
    // console.log(id);

    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((data) => {
        setloading(true);
        setstate(data);
        console.log("gggggggggg");
      })
      .catch((err) => console.log("errrrrorr"));
  }, []);

  return (
    <div className="product">
      {!loading &&
        state.map((data) => (
          <div>
            <p>Hi there</p>
            <img src={data.image} alt="image doesnt show" />
            <p>{data.price}</p>
            <p>{data.category}</p>
            <h1>relooo</h1>
          </div>
        ))}
    </div>
  );
};

export default Product;
