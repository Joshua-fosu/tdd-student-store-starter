import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { HandleRemoveAddItemsToCart } from "../Product/Product";

function ProductPage({ products, cartItems, setCartItems }) {
  let urlParams = useParams();
  let product = products.find((product, idx) => {
    return product.id.toString() === urlParams.product_id;
  });
  console.log("detail", product);
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
        <div style={{ display: "flex" }}>
          <div style={{ width: "70%" }}>
            <HandleRemoveAddItemsToCart
              product_id={product.id}
              cartItems={cartItems}
              setCartItems={setCartItems}
              product_price={product.price}
            />
          </div>
          <div style={{ width: "30%", textAlign: "right" }}>
            <p>{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
