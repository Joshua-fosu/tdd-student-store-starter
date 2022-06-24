import React from "react";
import "./Checkout.css";
import axios from "axios";

function Checkout({
  cartItems,
  userName,
  setUserName,
  userEmail,
  setUserEmail,
}) {
  async function handleCheckout(event) {
    event.preventDefault();
    let arr = [];
    const URL = "https://codepath-store-api.herokuapp.com/store";

    if (userName !== null && userEmail !== null && cartItems.length !== 0) {
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
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("Successul fail");
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
          onChange={handleUserName}
        />{" "}
        <br />
        <br />
        <label for="lname">Email:</label> <br />
        <input type="text" id="email" name="email" onChange={handleUserEmail} />
        <br />
        <br />
        <input type="submit" value="Checkout" onClick={handleCheckout}></input>
      </form>
    </div>
  );
}

export default Checkout;
