import React from "react";
import { useParams } from "react-router-dom";
import "./ProductPage.css";

function ProductPage({ products }) {
  console.log("products: ", products);
  let urlParams = useParams();
  let product = products.find((product, idx) => {
    return product.id.toString() === urlParams.product_id;
  });
  console.log(product);
  return (
    <div className="product_page_container">
      <h1>Product #{urlParams.product_id}</h1>
      <div className="product_page_img_container">
        <img
          src={product.image}
          alt=""
          srcset=""
          className="product_page_img"
        />
      </div>
      <div>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductPage;
