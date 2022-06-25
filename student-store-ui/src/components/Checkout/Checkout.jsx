import React from "react";
import "./Checkout.css";
import axios from "axios";
import { useState } from "react";
import Receipt from "./Receipt";

function Checkout({
  cartItems,
  userName,
  setUserName,
  userEmail,
  setUserEmail,
  subTotal,
  total,
  setCartItems,
}) {
  const [isCheckedOut, setIsCheckedOut] = useState("false");
  const [isRequireDetail, setIsRequireDetail] = useState("false");
  const [requiredDetail, setRequiredDetail] = useState("");

  let requireItem = "";

  function requireCartItems() {
    requireItem = <p>Please include Items in your Cart</p>;
  }

  function requireUserName() {
    requireItem = <p>Please include your name and email</p>;
  }

  function requireUserEmail() {
    requireItem = <p>Please include your name and email</p>;
  }

  async function handleCheckout(event) {
    event.preventDefault();
    let arr = [];
    const URL = "https://codepath-store-api.herokuapp.com/store";

    if (userName === "") {
      requireItem = <p>Please include your name and email</p>;
      setIsRequireDetail("true");
    } else if (userEmail === "") {
      requireUserName;
      setIsRequireDetail("true");
    } else if (cartItems.length === 0) {
      requireCartItems;
      setIsRequireDetail("true");
    } else if (
      userName !== null &&
      userEmail !== null &&
      cartItems.length !== 0
    ) {
      setIsRequireDetail("false");
      cartItems.forEach((cartItem) => {
        arr.push({ itemId: cartItem.id, quantity: cartItem.number });
      });

      const new_Receipt = {
        user: {
          name: userName,
          email: userEmail,
        },
        shoppingCart: arr,
      };
      try {
        const res = await axios.post(URL, new_Receipt);
        setIsCheckedOut("true");
      } catch (err) {}
    }
  }

  function handleUserName(event) {
    setUserName(event.target.value);
  }

  function handleUserEmail(event) {
    setUserEmail(event.target.value);
  }

  return (
    <div>
      <form>
        <label for="fname">Full Name:</label> <br />
        <input
          type="text"
          id="name"
          name="name"
          value={userName}
          onChange={handleUserName}
        />{" "}
        <br />
        <br />
        <label for="lname">Email:</label> <br />
        <input
          type="text"
          id="email"
          name="email"
          value={userEmail}
          onChange={handleUserEmail}
        />
        <br />
        <p>
          {isRequireDetail === "true" ? (
            <p>Please add items to your cart and include name and email </p>
          ) : (
            <p></p>
          )}
        </p>
        <br />
        <input type="submit" value="Checkout" onClick={handleCheckout}></input>
      </form>

      <div>Checkout Info</div>
      <div>
        {isCheckedOut === "false" ? (
          <p>
            A confirmation email will be sent to you so that you can confirm
            this order. Once you have confirmed the order, it will be delivered
            to your dorm room.
          </p>
        ) : (
          <p>
            <Receipt
              cartItems={cartItems}
              userEmail={userEmail}
              userName={userName}
              subTotal={subTotal}
              total={total}
              setIsCheckedOut={setIsCheckedOut}
              setCartItems={setCartItems}
              setUserEmail={setUserEmail}
              setUserName={setUserName}
            />
          </p>
        )}
      </div>
    </div>
  );
}

export default Checkout;
