import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Product = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setloading(false);
      })
      .catch((err) => console.log("Fetch error"));
  }, []);

  return (
    <div className="product">
      {!loading && (
        <div key={product.id} className="product-frist">
          <img src={product.image} alt="image doesnt show" />
          <div className="product-second">
            <h1>Product id is: {id}</h1>
            <p>{product.title}</p>
            <p>Price is : {product.price}$</p>
            <p>{product.category}</p>
            <button>Add to cart</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
