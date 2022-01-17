import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { AddtoCart } from "./AddtoCart/AddtoCart";
// import { Exportet } from "./AddtoCart/AddtoCart";
// import { Fade } from "./AddtoCart/AddtoCart";

const Product = (props) => {


  const [product, setProduct] = useState([]);
  const [loading, setloading] = useState(true);
  const numbersProduct = useSelector(state => state)
  const dispatcher = useDispatch()
  const { id } = useParams();
  let goo = 0
  const prices = numbersProduct.map(x => {
    const once = x.qty * x.price
    goo += once
  })
  console.log(goo);


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
            <button onClick={() => dispatcher(AddtoCart(product))}>Add to cart</button>
            {/* <button onClick={() => dispatcher(Exportet(product))}>Exportet</button> */}
            {/* <button onClick={() => dispatcher(Fade(product))} >Fade</button> */}
            <button onClick={() => console.log(numbersProduct)} >State console log</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
