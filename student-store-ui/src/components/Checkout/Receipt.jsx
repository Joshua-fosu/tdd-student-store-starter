import React from "react";
import "./Receipt.css";

function Receipt({
  userName,
  userEmail,
  cartItems,
  subTotal,
  total,
  setIsCheckedOut,
  setCartItems,
  setUserName,
  setUserEmail,
}) {
  function handleShopMore() {
    setIsCheckedOut("false");
    setCartItems([]);
    setUserEmail("");
    setUserName("");
  }

  return (
    <div>
      <h1>Receipt</h1>
      <p>
        Showing receipt for {userName} available at {userEmail}:
      </p>
      <ul>
        {cartItems.map((cartItem, idx) => (
          <li>
            {cartItem.number} total {cartItem.name} purchased at a cost of $
            {cartItem.product_price} for a total cost of $
            {(cartItem.number * cartItem.product_price).toFixed(2)}
          </li>
        ))}
        <li>Before taxes, the subtotal was ${subTotal}</li>
        <li>
          After taxes and fees were applied, the total comes out to ${total}
        </li>
      </ul>
      <button onClick={handleShopMore}>Shop More</button>
    </div>
  );
}

export default Receipt;
