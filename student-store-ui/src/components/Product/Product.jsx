import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";

function Product({ product, cartItems, setCartItems }) {
  let individualCartItem = cartItems.filter((cartItem) => {
    return cartItem.id === product.id;
  });
  console.log(product.id, individualCartItem);
  return (
    <div className="product_container">
      <Link to={"/products/" + product.id}>
        <div className="product_img_container">
          <img src={product.image} alt="" srcset="" className="product_img" />
        </div>
      </Link>
      <div>
        <p>{product.name}</p>
        <p>${product.price}</p>

        <HandleRemoveAddItemsToCart
          product_id={product.id}
          cartItems={cartItems}
          setCartItems={setCartItems}
          product_price={product.price}
        />
        <p className="to_display">{individualCartItem[0]?.number}</p>
      </div>
    </div>
  );
}

export function HandleRemoveAddItemsToCart({
  product_id,
  cartItems,
  setCartItems,
  product_price,
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
      };
      setCartItems([...cartItems, newCartItem]);
    }
    console.log(cartItems);
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
