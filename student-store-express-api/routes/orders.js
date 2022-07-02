const express = require("express");
const orders = express.Router();
const Order = require("../model/Order");
const data = require("../data/db.json");

orders.get("/", (req, res) => {
  const orders = data.purchases;
  res.status(200).send(orders);
});

orders.get("/:receipt_id", (req, res) => {
  const receipt = Order.getReceiptByID(req.params.receipt_id);
  res.status(200).send(receipt);
});

module.exports = orders;
