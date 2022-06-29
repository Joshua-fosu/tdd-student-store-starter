import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { HandleRemoveAddItemsToCart } from "../Product/Product";
import axios from "axios";

function ProductPage({ products, cartItems, setCartItems }) {
  let urlParams = useParams();
  const [product, setProduct] = useState("");

  useEffect(() => {
    async function fetchProduct() {
      const response = await axios.get(
        `http://localhost:3001/store/${urlParams.product_id}`
      );
      setProduct(response.data);
      console.log("product_detail_page", product);
    }
    fetchProduct();
  }, []);

  let product_cart = cartItems.find((cartItem) => {
    return product.id === cartItem.id;
  });

  return (
    <div className="product_page_container">
      <h1>Product #{urlParams.product_id}</h1>
      <div className="product_page_img_container">
        <img src={product?.image} alt="" className="product_page_img" />
      </div>
      <div>
        <p>{product?.name}</p>
        <p>${product?.price}</p>
        <div style={{ display: "flex" }}>
          <div style={{ width: "70%" }}>
            <HandleRemoveAddItemsToCart
              product_id={product?.id}
              cartItems={cartItems}
              setCartItems={setCartItems}
              product_price={product?.price}
              product_name={product?.name}
            />
          </div>
          <div style={{ width: "30%", textAlign: "right" }}>
            <p>{product_cart?.number}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
