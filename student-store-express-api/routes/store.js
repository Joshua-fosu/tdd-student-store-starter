const express = require("express");
const store = express.Router();
const StoreModel = require("../model/Store");
const Receipt = require("../model/Receipt");

store.use(
  express.urlencoded({
    extended: true,
  })
);

store.get("/", function (req, res) {
  const pair = StoreModel.getProducts();
  res.send(pair);
});

store.post("/", (req, res) => {
  if (req.body.user && req.body.shoppingCart) {
    var shoppingCart = req.body.shoppingCart;
    const unique_products = new Set(shoppingCart.map((v) => v.id));
    if (shoppingCart.length !== unique_products.size) {
      console.log("unique", unique_products);
      res.status(400).send({ shoppingCart, new_products: unique_products });
    } else {
      shoppingCart.forEach((item) => {
        if (!(item.id && item.number)) {
          res.status(400).send("Missing Item ID/ quantity for some items");
        } else {
          const receipt = Receipt.generateReceipt(req.body);
          res.status(201).send(receipt);
        }
      });
    }
  } else {
    res.status(400).send("Error");
  }
});

store.get("/:productID", function (req, res) {
  const product = StoreModel.getProductbyID(req.params.productID);
  res.send(product);
});

module.exports = store;
