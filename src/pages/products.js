import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res.products);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <div className="product-grid">
        {products.map((item) => {
          return (
            <div className="product-card" key={item.id}>
              <Link to={`/products/${item.id}`}>
                <img src={item.thumbnail} />
                <h3>{item.title}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
