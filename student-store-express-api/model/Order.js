const { storage } = require("../data/storage");

class Order {
  constructor() {
    this.super();
  }

  static getAllReceipts() {
    const orders = storage.get("purchases");
    return orders;
  }

  static getReceiptByID(key) {
    const receipts = this.getAllReceipts();
    const receipt = receipts.filter((receipt) => {
      return receipt.id.toString() === key;
    });
    return receipt;
  }
}

module.exports = Order;
