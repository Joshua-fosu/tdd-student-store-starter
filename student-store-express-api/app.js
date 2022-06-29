const express = require('express')
const app = express()
const store = require('./routes/store')
const cors = require('cors')
app.use(cors())


app.use(express.json())
app.use('/store', store)

app.get('/', function (req, res) {
  res.send('Hello World')
})

module.exports = app;
