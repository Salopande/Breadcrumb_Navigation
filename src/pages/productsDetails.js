import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductsDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(product);
      });
  }, [id]);

  return (
    <div>
      <h3>{product?.title}</h3>
      {product ? (
        <div style={{ display: "flex" }}>
          <img style={{ height: 300 }} src={product.thumbnail} alt="Product" />

          <h3>$ {product.price}</h3>
          <p>{product.description}</p>
        </div>
      ) : (
        // this is not the right way to do loading, create a separate state for this
        // This is temporary solution for breadcrumbs tutorial
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductsDetails;
