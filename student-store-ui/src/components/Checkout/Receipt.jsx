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
  purchaseObject,
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
        Showing receipt for {purchaseObject.purchase.name} available at{" "}
        {purchaseObject.purchase.email}:
      </p>
      <ul>
        {purchaseObject.purchase.order.map((cartItem, idx) => (
          <li>
            {cartItem.number} total {cartItem.name} purchased at a cost of $
            {cartItem.product_price} for a total cost of $
            {(cartItem.number * cartItem.product_price).toFixed(2)}
          </li>
        ))}
        <li>Before taxes, the subtotal was ${subTotal}</li>
        <li>
          After taxes and fees were applied, the total comes out to $
          {purchaseObject.purchase.total}
        </li>
      </ul>
      <button onClick={handleShopMore}>Shop More</button>
    </div>
  );
}

export default Receipt;
