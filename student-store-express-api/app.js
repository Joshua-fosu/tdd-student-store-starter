const express = require('express')
const app = express()
const store = require('./routes/store')



app.use('/store', store)

app.get('/', function (req, res) {
  res.send('Hello World')
})

module.exports = app;
