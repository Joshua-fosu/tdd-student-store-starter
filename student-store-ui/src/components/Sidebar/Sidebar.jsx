import * as React from "react";
import "./Sidebar.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Checkout from "../Checkout/Checkout";
import { useState } from "react";

export default function Sidebar({
  cartItems,
  sideBarStatus,
  setSideBarStatus,
  userName,
  setUserName,
  userEmail,
  setUserEmail,
  setCartItems,
}) {
  console.log("cartItems", cartItems);

  let subTotal = 0;
  cartItems.forEach((cartItem) => {
    subTotal += cartItem.product_price * cartItem.number;
  });

  let tax = 0.3 * subTotal;

  let total = tax + subTotal;
  subTotal = subTotal.toFixed(2);
  tax = tax.toFixed(2);
  total = total.toFixed(2);

  function handleSideBarToggle() {
    sideBarStatus === "closed"
      ? setSideBarStatus("opened")
      : setSideBarStatus("closed");
  }

  let n = (
    <section className="closed">
      <ArrowBackIosNewIcon onClick={handleSideBarToggle} />
    </section>
  );

  if (sideBarStatus === "opened")
    n = (
      <div className="opened">
        <ArrowBackIosNewIcon onClick={handleSideBarToggle} />
        <h2>Shopping Cart</h2>
        {cartItems.length !== 0 ? (
          <table>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Cost</th>
            </tr>
            {cartItems.map((cartItem) => (
              <tr>
                <td>{cartItem.product_name}</td>
                <td>{cartItem.number}</td>
                <td>${cartItem.product_price}</td>
                <td>
                  ${(cartItem.product_price * cartItem.number).toFixed(2)}
                </td>
              </tr>
            ))}
            <tr>
              <th>SubTotal</th>
              <td></td>
              <td></td>
              <th>${subTotal}</th>
            </tr>
            <tr>
              <th>Taxes and Fees</th>
              <th></th>
              <th></th>
              <th>${tax}</th>
            </tr>
            <tr>
              <th>Total</th>
              <th></th>
              <th></th>
              <th>${total}</th>
            </tr>
          </table>
        ) : (
          <p>No products added to Cart</p>
        )}

        <h2>Payment Info</h2>
        <Checkout
          userName={userName}
          setUserName={setUserName}
          cartItems={cartItems}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          subTotal={subTotal}
          total={total}
          setCartItems={setCartItems}
        />
      </div>
    );

  return <div className={sideBarStatus}>{n}</div>;
}
