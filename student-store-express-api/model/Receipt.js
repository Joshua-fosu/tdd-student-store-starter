const { storage } = require("../data/storage.js");
var current = new Date();
const data = require("../data/db.json");

class Receipt {
  constructor() {
    this.super();
  }

  static getTotal(userShoppingCart) {
    var total = 0;
    userShoppingCart.forEach((item) => {
      total += item.product_price * item.number;
    });
    total *= 1.0875;
    return total.toFixed(2);
  }

  static generateReceipt(userData) {
    const purchase = {
      id: storage.get("purchases").length + 1,
      name: userData.user.name,
      email: userData.user.email,
      order: userData.shoppingCart,
      total: this.getTotal(userData.shoppingCart),
      createdAt: current.toLocaleString(),
    };
    storage.add("purchases", purchase);
    data.purchases.push(purchase);
    return { purchase: purchase };
  }
}

module.exports = Receipt;
