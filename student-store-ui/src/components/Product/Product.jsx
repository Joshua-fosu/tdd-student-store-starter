import React from "react";
import "./Product.css";
import { Link, Routes, Route } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import { Card } from "react-bootstrap";

function Product({ product, cartItems, setCartItems, data }) {
  let individualCartItem = cartItems.filter((cartItem) => {
    return cartItem.id === product.id;
  });
  return (
    <Card className="product_container">
      <Link to={"/products/" + product.id}>
        <Card.Img variant="top" src={product.image} className="product_img" />
      </Link>

      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <HandleRemoveAddItemsToCart
            product_id={product.id}
            cartItems={cartItems}
            setCartItems={setCartItems}
            product_price={product.price}
            product_name={product.name}
          />
          {individualCartItem[0]?.number}
        </small>
      </Card.Footer>
    </Card>
  );
}

export function HandleRemoveAddItemsToCart({
  product_id,
  cartItems,
  setCartItems,
  product_price,
  product_name,
}) {
  let isInCartAlready = cartItems.find((cartItem, idx) => {
    return cartItem.id === product_id;
  });
  function handleAddItem() {
    if (isInCartAlready) {
      let intermediate_num = cartItems.filter((cartItem, idx) => {
        return cartItem.id === product_id;
      });
      var increase_count = intermediate_num[0].number;
      setCartItems(
        cartItems.map((eachItem) =>
          eachItem.id === product_id
            ? {
                ...eachItem,
                number: ++increase_count,
              }
            : eachItem
        )
      );
    } else {
      const newCartItem = {
        id: product_id,
        number: 1,
        product_price: product_price,
        product_name: product_name,
      };
      setCartItems([...cartItems, newCartItem]);
    }
  }

  function handleRemoveItem() {
    let intermediate_num = cartItems.filter((cartItem, idx) => {
      return cartItem.id === product_id;
    });
    var increase_count = -40;
    increase_count = intermediate_num[0]?.number;
    if (increase_count > 1) {
      setCartItems(
        cartItems.map((eachItem) =>
          eachItem.id === product_id
            ? {
                ...eachItem,
                number: --increase_count,
              }
            : eachItem
        )
      );
    } else {
      setCartItems(
        cartItems.filter((eachItem) => {
          return eachItem.id !== product_id;
        })
      );
    }
  }

  return (
    <div>
      <button onClick={handleAddItem}>Add</button>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
}

export default Product;
