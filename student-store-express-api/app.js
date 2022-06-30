const express = require("express");
const app = express();
const store = require("./routes/store");
const orders = require("./routes/orders");
const cors = require("cors");
app.use(cors());

app.use(express.json());
app.use("/store", store);
app.use("/orders", orders);

app.get("/", function (req, res) {
  res.send("Hello World");
});

module.exports = app;
