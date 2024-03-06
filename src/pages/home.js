import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [trandingProducts, setTrandingProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        const data = res.products.slice(0, 6);
        setTrandingProducts(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <h1>Tranding Products</h1>
      <div className="product-grid">
        {trandingProducts.map((item) => {
          return (
            <div className="product-card" key={item.id}>
             <Link to={`/products/${item.id}`}>
                <img src={item.thumbnail}/>
                <h3>{item.title}</h3>
             </Link>
            </div>
          );
        })}
        <Link to='/products'><button style={{width:"100%", padding:10}}>View All Products</button></Link>
      </div>
    </div>
  );
};

export default Home;
