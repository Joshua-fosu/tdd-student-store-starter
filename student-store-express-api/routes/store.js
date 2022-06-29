const express = require('express')
const store = express.Router()
const StoreModel = require('../model/Store')

store.get('/', function (req, res) {
   const pair = StoreModel.getProducts();

  res.send(pair)
})



store.get('/:productID', function(req, res) {
    const product = StoreModel.getProductbyID(req.params.productID)
    res.send(product)

})





module.exports = store;
