import React, {useState, useEffect} from "react";
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
      
      <h1>product id is: {id}</h1>
      {!loading &&
          <div key={product.id}>
            <p>Hi there</p>
            <img src={product.image} alt="image doesnt show" />
            <p>{product.price}</p>
            <p>{product.category}</p>
            <h1>relooo</h1>
          </div>
}
        
    </div>
  );
};

export default Product;
