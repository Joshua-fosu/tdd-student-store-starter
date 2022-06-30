const express = require("express");
const orders = express.Router();
const Order = require("../model/Order");

orders.get("/", (req, res) => {
  const orders = Order.getAllReceipts();
  res.status(200).send(orders);
});

orders.get("/:receipt_id", (req, res) => {
  const receipt = Order.getReceiptByID(req.params.receipt_id);
  res.status(200).send(receipt);
});

module.exports = orders;
